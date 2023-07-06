import Api, { ApiContextProvider } from '@/api/Api';
import { useMemo } from 'react';

function ApiProvider({
  children,
  initialToken,
}: {
  children: React.ReactNode;
  initialToken?: string;
}) {
  const api = useMemo(() => {
    const instance = new Api();

    if (initialToken) {
      instance.initialize(initialToken);
    }
    return instance;
  }, [initialToken]);
  return <ApiContextProvider value={api}>{children} </ApiContextProvider>;
}

export default ApiProvider;
