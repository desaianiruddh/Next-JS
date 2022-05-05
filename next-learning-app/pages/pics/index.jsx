/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';

const index = () => {
  return (
    <>
      <Head>
        <title>Photos</title>
      </Head>
      <div sx={{ textAlign: 'center', mt: '25px' }}>
        {['1', '2', '3', '4', '5'].map((path) => {
          return (
            <div key={path} sx={{ mt: '20px' }}>
              <Image
                src={`/${path}.jpg`}
                alt="Background"
                width="900"
                height="600"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
