import { END_POINT } from '@/constants';
import {
  deepMapToSnakeCase,
  getPayloadData,
  getResponseData,
} from '@/utils/apiUtils';
import { createContext, useContext } from 'react';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestBody = Record<string, unknown> | unknown[];

const DEFAULT_ERROR_MESSAGE = 'An unknown error occurred.';

class ApiError extends Error {
  constructor(message: string, public errors?: any) {
    super(message);
  }
}

export class ClientError extends ApiError {}
class UpstreamError extends ApiError {}
class NotFoundError extends ClientError {}
export class ConflictError extends ClientError {}

export default class Api {
  public token?: string;

  initialize(authorization?: string) {
    if (authorization) {
      this.token = authorization;
    }
  }

  get authorization() {
    return this.token ? `Bearer ${this.token}` : null;
  }

  getUrl(path: string) {
    //need to add the base path here
    return `${END_POINT}${path}`;
  }

  getQueryParams(queryParams: Record<string, unknown>) {
    const params: Record<string, unknown> = {};

    // filter our null/undefined values
    Object.keys(queryParams).forEach((param) => {
      if (queryParams[param] != null) {
        params[param] = queryParams[param];
      }
    });

    return new URLSearchParams(deepMapToSnakeCase(params));
  }

  get<TResult>(
    path: string,
    queryParams: Record<string, unknown> = {},
    whitelistKeys: false | string[] = []
  ) {
    const params = this.getQueryParams(queryParams);

    return this.request<TResult>(
      'GET',
      `${path}?${params}`,
      undefined,
      whitelistKeys
    );
  }

  post<
    TResult,
    TBody extends Record<string, unknown> = Record<string, unknown>
  >(
    path: string,
    data?: TBody,
    queryParams: Record<string, unknown> = {},
    whitelistKeys: false | string[] = false
  ) {
    const params = this.getQueryParams(queryParams);

    return this.request<TResult, TBody>(
      'POST',
      `${path}?${params}`,
      data,
      whitelistKeys
    );
  }

  put<TResult, TBody extends RequestBody = RequestBody>(
    path: string,
    data?: TBody | FormData,
    queryParams: Record<string, unknown> = {},
    whitelistKeys: false | string[] = []
  ) {
    const params = this.getQueryParams(queryParams);
    return this.request<TResult, TBody>(
      'PUT',
      `${path}?${params}`,
      data,
      whitelistKeys
    );
  }

  patch<TResult, TBody extends RequestBody = RequestBody>(
    path: string,
    data?: TBody | FormData,
    queryParams: Record<string, unknown> = {},
    whitelistKeys: false | string[] = []
  ) {
    const params = this.getQueryParams(queryParams);
    return this.request<TResult, TBody>(
      'PATCH',
      `${path}?${params}`,
      data,
      whitelistKeys
    );
  }

  delete(
    path: string,
    data?: Record<string, unknown>,
    queryParams: Record<string, unknown> = {}
  ) {
    const params = this.getQueryParams(queryParams);
    return this.request('DELETE', `${path}?${params}`, data);
  }

  private async request<TResult, TBody extends RequestBody = RequestBody>(
    method: Method,
    path: string,
    data?: TBody | FormData,
    whitelistKeys?: false | string[]
  ): Promise<TResult | null> {
    const url = this.getUrl(path);
    const init: RequestInit = {
      method,
      credentials: 'same-origin',
    };

    if (this.authorization) {
      init.headers = { Authorization: this.authorization };
    }

    if (data) {
      if (data instanceof FormData) {
        init.body = data;
      } else {
        init.headers = {
          'Content-Type': 'application/json',
          ...init.headers,
        };
        init.body =
          whitelistKeys !== false
            ? getPayloadData(data, whitelistKeys)
            : JSON.stringify(data);
      }
    }

    const response = await fetch(url, init);

    // FIXME: this is a really ugly hack to get around unauthenticated requests
    if (response.status === 401) {
      console.log('API error');
      // window.location.pathname = '/auth/logout';
      return null;
    }

    if (
      response.status === 204 ||
      (response.status === 404 && method === 'GET')
    ) {
      return null;
    }

    if (!response.ok) {
      throw await Api.resolveError(response);
    }

    const body = await response.json();

    return (
      whitelistKeys !== false ? getResponseData(body, whitelistKeys) : body
    ) as TResult;
  }

  private static async resolveError(response: Response) {
    let body;
    let errors;

    try {
      body = await response.text();
      errors = JSON.parse(body).errors || [];
    } catch (e) {
      errors = [];
    }

    const { status } = response;

    if (status >= 500) {
      return new UpstreamError(DEFAULT_ERROR_MESSAGE);
    }

    if (!Array.isArray(errors)) {
      return new ClientError(DEFAULT_ERROR_MESSAGE);
    }

    const firstMessage = errors?.[0]?.detail || DEFAULT_ERROR_MESSAGE;

    if (status === 404) {
      return new NotFoundError(firstMessage);
    }

    if (status === 409) {
      return new ConflictError(firstMessage);
    }

    return new ClientError(firstMessage, errors);
  }
}

export const ApiContext = createContext<Api>(null as any);
export const ApiContextProvider = ApiContext.Provider;

export const useApi = () => useContext(ApiContext);
