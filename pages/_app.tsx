import { GlobalStyle, CSSReset } from '../styles/globals';
import type { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // Provider from next-auth allows user session state to be shared between pages
    // Docs on next-auth client: https://next-auth.js.org/getting-started/client
    <AuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <GlobalStyle />
        <CSSReset />
        <Component {...pageProps} />
      </ReduxProvider>
    </AuthProvider>
  );
};

export default App;
