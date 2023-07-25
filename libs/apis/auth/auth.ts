import { AXIOS } from '@app/services'
import { AxiosResponse } from 'axios'


export const API_ROUTES = {
  LOGIN: '/auth/login',
  REFRESH_TOKEN:'/auth/refresh-token',
}
export const AUTH = {
  
  LOGIN: async (username: string, password: string) => {
    const response: AxiosResponse<any, any>= await AXIOS.post(
      API_ROUTES.LOGIN,
      {
        username,
        password,
      },
      { withCredentials: false,
      },
    )
    return response;
  },
  REFRESH_TOKEN: async (refreshToken: string) => {
    const response: AxiosResponse<any, any>=await AXIOS.post(
      API_ROUTES.REFRESH_TOKEN,
      {
        refreshToken,
      },
      { withCredentials: false,
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    )
    return response;
  },
  
}
