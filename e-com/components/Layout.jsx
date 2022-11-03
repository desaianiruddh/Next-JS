import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
