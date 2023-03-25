import '../styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Layouts } from '@/layouts/Layouts';
import { store } from '@/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
