import { API_KEYS } from '@/constants';
import { client } from '@/utils/apiUtils';
import { useMutation } from 'react-query';
import { useApi } from './Api';

const { ARCHIVE_CALL, GET_CALLS } = API_KEYS;

export const useArchiveCall = () => {
  const Api = useApi();
  const myClient = client();

  return useMutation({
    mutationKey: [ARCHIVE_CALL],
    mutationFn: (callId: string) => Api.put(`/calls/${callId}/archive`),
    onSettled() {
      myClient.invalidateQueries(GET_CALLS);
    },
  });
};
