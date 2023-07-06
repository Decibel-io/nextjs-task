import Api, { ApiContextProvider } from '@/api/Api';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMemo } from 'react';

function ApiProvider({
  children,
  initialToken,
}: {
  children: React.ReactNode;
  initialToken?: string;
}) {
  const { item } = useLocalStorage('AUTH_TOKEN');
  const api = useMemo(() => {
    const instance = new Api();
    const token = initialToken || (item as string);
    if (token) {
      instance.initialize(token);
    }
    return instance;
  }, []);
  return <ApiContextProvider value={api}>{children} </ApiContextProvider>;
}

export default ApiProvider;
