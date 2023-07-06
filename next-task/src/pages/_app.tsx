import type { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AuthProvider from '@/context/auth/AuthProvider';
import ApiProvider from '@/context/api/ApiProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </AuthProvider>
      </ApiProvider>
    </QueryClientProvider>
  );
}
