import { GlobalStyle, CSSReset } from '../styles/globals';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CSSReset />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
