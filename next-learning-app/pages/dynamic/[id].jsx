/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import Head from 'next/head';

const User = () => {
  const route = useRouter();
  const { id } = route.query;
  return (
    <>
      <Head>
        <title>User:{id}</title>
      </Head>
      <div sx={{ variant: 'containers.pageContent' }}>User/{id}</div>
    </>
  );
};

export default User;
