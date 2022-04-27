import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';
import Nav from '../components/nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
