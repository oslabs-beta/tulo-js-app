import { useEffect } from 'react';
import Head from 'next/head';
import { GlobalStyle, CSSReset } from '../styles/globals';
import type { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';
import { COLORS } from '../styles/constants';

const App = ({ Component, pageProps }: AppProps) => {
  // register service worker when App mounts
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) =>
          console.log(
            `Service worker registered in scope: ${registration.scope}`
          )
        )
        .catch((error) => {
          console.log(`Error registering service worker: ${error}`);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          href='/images/android-chrome-192x192.png'
        />
        <meta
          name='description'
          content='Making service workers easy so that your app is fast and reliable, even offline.'
        />
        <meta name='theme-color' content={COLORS.tealPrimary} />
      </Head>
      <AuthProvider session={pageProps.session}>
        <ReduxProvider store={store}>
          <GlobalStyle />
          <CSSReset />
          <Component {...pageProps} />
        </ReduxProvider>
      </AuthProvider>
    </>
  );
};

export default App;
