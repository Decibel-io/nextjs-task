import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
  private client: AxiosInstance;
  private access_token: string | null;
  private refresh_token: string | null;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
    const _access_token = localStorage.getItem("access_token");
    const _refresh_token = localStorage.getItem("refresh_token");
    if (_access_token && _refresh_token) {
      this.access_token = _access_token;
      this.refresh_token = _refresh_token;
    } else {
      this.access_token = null;
      this.refresh_token = null;
    }
  }

  logout(){
    localStorage.clear()
    this.access_token = null
    this.refresh_token = null
  }

  setTokens({ access_token, refresh_token }: App.AuthResponse) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }

  getRefreshToken() {
    return this.refresh_token
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const headers = this.getHeaders();
      const response: AxiosResponse<T> = await this.client.get<T>(url, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const headers = this.getHeaders();
      const response: AxiosResponse<T> = await this.client.post<T>(url, data, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const headers = this.getHeaders();
      const response: AxiosResponse<T> = await this.client.put<T>(url, data, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const headers = this.getHeaders();
      const response: AxiosResponse<T> = await this.client.delete<T>(url, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private getHeaders(): { [key: string]: string } {
    if (this.access_token) {
      return {
        Authorization: `Bearer ${this.access_token}`,
      };
    }

    const token = localStorage.getItem("accessToken");

    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }

    return {};
  }
}

export default HttpClient;
