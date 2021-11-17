import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/form.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>next-firebase-boilerplate</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
