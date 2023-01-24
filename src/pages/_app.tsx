import '@src/common/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/global/Layout';
import { Provider } from 'react-redux';
import { store } from '@src/common/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}
