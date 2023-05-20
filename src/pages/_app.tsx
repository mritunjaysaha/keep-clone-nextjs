import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { Layouts } from '@/layouts/Layouts';
import { persistor, store } from '@/redux/store';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Layouts>
            <Component {...pageProps} />
            <ToastContainer position='bottom-left' />
          </Layouts>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
