/** @jsxImportSource theme-ui */
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default ({ user }) => {
  const { first_name, last_name, email, avatar } = user;
  const name = first_name + ' ' + last_name;
  const router = useRouter();
  if (router.isFallback) {
    console.log('hello');
    return <h2 sx={{ textAlign: 'center' }}>....Loading</h2>;
  }
  return (
    <div sx={{ textAlign: 'center', mt: '150px', fontSize: '20px' }}>
      <Head>
        <title>User Details</title>
      </Head>
      <h2>User Details</h2>
      <div>
        <div>
          <img src={avatar} sx={{ borderRadius: '50%' }} alt="user" />
        </div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const userList1 = await axios.get('https://reqres.in/api/users?page=1');
  const userList2 = await axios.get('https://reqres.in/api/users?page=2');
  const data = [...userList1.data.data, ...userList2.data.data];
  const paths = data.map((user) => {
    return {
      params: { userId: `${user.id}` },
    };
  });
  return {
    // paths: [
    //   {
    //     params: { userId: '1' },
    //   },
    //   {
    //     params: { userId: '3' },
    //   },
    //   {
    //     params: { userId: '5' },
    //   },
    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(
    `https://reqres.in/api/users/${params.userId}`
  );
  const data = response.data.data;
  return {
    props: {
      user: data,
    },
  };
}
