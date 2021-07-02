import { GlobalStyle, CSSReset } from '../styles/globals';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // Provider from next-auth allows user session state to be shared between pages
    // Docs on next-auth client: https://next-auth.js.org/getting-started/client
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <CSSReset />
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;
