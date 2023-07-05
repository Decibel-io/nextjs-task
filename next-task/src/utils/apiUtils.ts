import { camelCase } from 'lodash';
import isObject from 'lodash/isObject';
import snakeCase from 'lodash/snakeCase';
import transform from 'lodash/transform';
import { useQueryClient } from 'react-query';

type RequestBody = Record<string, unknown> | unknown[];
namespace ApiUtilities {
  const deepMapObjects =
    (replaceKeyFunc: (key?: string) => string, whitelistKeys: string[]) =>
    (result: Record<string, any>, value: any, key: string) => {
      if (value instanceof Date) {
        value = value.toJSON();
      } else if (isObject(value) && !whitelistKeys.includes(key)) {
        value = transform(value, deepMapObjects(replaceKeyFunc, whitelistKeys));
      }
      result[replaceKeyFunc(key)] = value;
      return result;
    };

  export function deepMapToSnakeCase(
    value: RequestBody,
    whitelistKeys: string[] = []
  ) {
    return transform(value, deepMapObjects(snakeCase, whitelistKeys));
  }

  export function deepMapToCamelCase(
    value: Record<any, any>,
    whitelistKeys: string[] = []
  ) {
    return transform(value, deepMapObjects(camelCase, whitelistKeys));
  }

  export function getPayloadData(
    value: RequestBody,
    whitelistKeys: string[] = []
  ) {
    return JSON.stringify(deepMapToSnakeCase(value, whitelistKeys));
  }
  export function getResponseData(
    data?: Record<any, any>,
    whitelistKeys: string[] = []
  ) {
    if (!data) {
      return null;
    }
    return deepMapToCamelCase(data, whitelistKeys);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  export const client = () => useQueryClient();
}

export const {
  deepMapToCamelCase,
  deepMapToSnakeCase,
  getPayloadData,
  getResponseData,
  client,
} = ApiUtilities;
