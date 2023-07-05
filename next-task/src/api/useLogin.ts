import { API_KEYS } from '@/constants';
import { ICredentials, LoginResponse } from '@/types/api';
import { client } from '@/utils/apiUtils';
import { useMutation } from 'react-query';
import { useApi } from './Api';

const { GET_CALLS, LOGIN } = API_KEYS;

export const useLogin = () => {
  const Api = useApi();
  const myClient = client();

  return useMutation({
    mutationKey: LOGIN,
    mutationFn: (body: ICredentials) =>
      Api.post<LoginResponse>('/auth/login', body),
    onSettled: () => myClient.invalidateQueries(GET_CALLS),
  });
};
