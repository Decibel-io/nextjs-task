import axios, { AxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getSession, signOut } from "next-auth/react";


async function getSessionData() {
  const session: any = await getSession();
  return session?.user.user
}


const axiosConfig: AxiosRequestConfig = {
  baseURL: " https://frontend-test-api.aircall.io",
};

const axiosInstance = axios.create(axiosConfig);

createAuthRefreshInterceptor(axiosInstance, async (failedRequest: any) => {
  await signOut()
});
const { get, post, put, patch, delete: remove } = axiosInstance;

export { get, post, put, patch, remove };

