import '../styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Layouts } from '@/layouts/Layouts';
import { persistor, store } from '@/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
