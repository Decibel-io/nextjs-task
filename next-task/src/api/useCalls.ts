import { API_KEYS } from '@/constants';
import { ICallResponse } from '@/types/api';
import { useQuery } from 'react-query';
import { useApi } from './Api';

export function useCalls(offset = 10, limit = 10) {
  const Api = useApi();

  return useQuery({
    queryKey: [API_KEYS.GET_CALLS, offset, limit],
    queryFn: () => Api.get<ICallResponse>(`/calls`, { offset, limit }),
  });
}
