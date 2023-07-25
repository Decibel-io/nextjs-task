import { AXIOS } from '@app/services'
import { AxiosResponse } from 'axios'

export const API_ROUTES = {
  CALLS: '/calls',
  NOTES: '/note',
  ARCHIVE: '/archive',
  FETCH_CALLS: (offset: number, limit: number): string => {
    return `${API_ROUTES.CALLS}?offset=${offset}&limit=${limit}`
  },
  ARCHIVE_CALL: (callId: string): string => {
    return `${API_ROUTES.CALLS}/${callId}${API_ROUTES.ARCHIVE}`
  },
  ADD_NOTE: (callId: string): string => {
    return `${API_ROUTES.CALLS}/${callId}${API_ROUTES.NOTES}`
  },
}

export const CALL_REQUESTS = {
  GET: async (offset: number, limit: number, accessToken: string) => {
    const response: AxiosResponse<any, any> = await AXIOS.get(API_ROUTES.FETCH_CALLS(offset, (limit-offset)), {
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response
  },
  ARCHIVE: async (callId: string, accessToken: string) => {
    const response: AxiosResponse<any, any> = await AXIOS.put(
      API_ROUTES.ARCHIVE_CALL(callId),
      {},
      {
        withCredentials: false,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    return response
  },
  ADD_NOTE: async (callId: string, note: string, accessToken: string) => {
    const response: AxiosResponse<any, any> = await AXIOS.post(
      API_ROUTES.ADD_NOTE(callId),
      {
        content: note,
      },
      {
        withCredentials: false,
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      },
    )
    return response
  },
}
