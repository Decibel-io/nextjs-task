import { API_KEYS } from '@/constants';
import { client } from '@/utils/apiUtils';
import { useMutation } from 'react-query';
import { useApi } from './Api';

const { ADD_NOTE, GET_CALLS } = API_KEYS;

export const useAddNote = () => {
  const Api = useApi();
  const myClient = client();

  return useMutation({
    mutationKey: ADD_NOTE,
    mutationFn: ({ id, content }: { id: string; content: string }) =>
      Api.post(`/calls/${id}/note`, { content }),
    onSettled: () => myClient.invalidateQueries([GET_CALLS]),
  });
};
