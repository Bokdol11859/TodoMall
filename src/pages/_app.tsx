import '@src/common/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/global/Layout';
import { Provider } from 'react-redux';
import { store } from '@src/common/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
