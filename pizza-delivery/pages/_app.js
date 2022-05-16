import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pizzzzaa...</title>
        <meta name="description" content="online pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
