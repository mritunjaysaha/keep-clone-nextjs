import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layouts } from '@/layouts/Layouts';
import { store } from '@/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  </Provider>
);

export default MyApp;
