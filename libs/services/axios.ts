import { Notification } from '@app/components'
import { ROUTE } from '@app/data'
import axios from 'axios'
import Router from 'next/router'

export const AXIOS = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: false,
})

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'Something went wrong, please try again later'
    // whatever you want to do with the error
    if (window !== undefined) {
      if (error?.response?.data?.message) errorMessage = error?.response?.data?.message || error?.message
    }

    // if (error?.response?.status == 401) {
    //   Router.push({
    //     pathname: ROUTE.AUTH.SIGN_IN,
    //     query: { logout: true },
    //   })
    // }

    Notification({ type: 'error', message: errorMessage })
    // throw error
  },
)
