import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from '../components/AppContext';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
