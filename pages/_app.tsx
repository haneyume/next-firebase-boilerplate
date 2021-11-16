import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/form.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
