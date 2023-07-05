import { API_KEYS } from '@/constants';
import { LoginResponse } from '@/types/api';
import { client } from '@/utils/apiUtils';
import { useMutation } from 'react-query';
import { useApi } from './Api';

const { GET_CALLS, REFRESH_TOKEN } = API_KEYS;

export function useRefreshToken() {
  const Api = useApi();
  const myClient = client();

  return useMutation({
    mutationKey: REFRESH_TOKEN,
    mutationFn: (body: {}) =>
      Api.post<LoginResponse>('/auth/refresh-token', body),
    onSettled: () => myClient.invalidateQueries(GET_CALLS),
  });
}
