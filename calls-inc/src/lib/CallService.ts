import { App } from "antd";
import HttpClient from "./HttpClient";

const BASE_URL = "https://frontend-test-api.aircall.io";

class CallService extends HttpClient {
  constructor() {
    super(BASE_URL);
  }

  isAuthenticated() {
    const token = localStorage.getItem("access_token");
    if (token) return true;

    return false;
  }

  async login<T>({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<App.AuthResponse> {
    return this.post("/auth/login", {
      username,
      password,
    });
  }

  async refreshAccessToken() {
    const data = this.post("/auth/refresh-token", {
      refresh_token: this.getRefreshToken(),
    });
    console.log(data);
  }

  async getCalls({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<App.CallResponse> {
    return this.get("/calls", {
      params: {
        offset,
        limit,
      },
    });
  }

  async editNote({ id, content }: { id: string; content: string }) {
    return this.post(`/calls/${id}/note`, {
      content,
    });
  }
}

export default new CallService();
