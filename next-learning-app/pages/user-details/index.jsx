/** @jsxImportSource theme-ui */
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

export default ({ users }) => {
  return (
    <div sx={{ textAlign: 'center' }}>
      <Head>
        <title>User List</title>
      </Head>
      <h2>User List </h2>
      {users.map((user) => {
        const { id, first_name, last_name } = user;
        let name = first_name + ' ' + last_name;
        return (
          <div key={id}>
            <hr />
            <Link href="/user-details/$[userId]" as={`/user-details/${id}`}>
              <h4 sx={{ cursor: 'pointer' }}>{name}</h4>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const userList1 = await axios.get('https://reqres.in/api/users?page=1');
  const userList2 = await axios.get('https://reqres.in/api/users?page=2');
  return {
    props: {
      users: [...userList1.data.data, ...userList2.data.data],
    },
  };
}
