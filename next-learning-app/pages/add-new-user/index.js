/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
axios;
export default function addUser() {
  const [userName, setUserName] = useState('');
  const handleUserName = (e) => {
    e = e.target.value;
    setUserName(e);
  };
  const addUser = async () => {
    const response = axios.post('/api/user-list', {
      id: `${Date.now()}`,
      name: `${userName}`,
    });
    setUserName('');
    alert('User Added Successfully');
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div sx={{ variant: 'containers.pageContent' }}>
        <input
          sx={{
            border: '2px solid blue',
            borderRadius: '10px',
            width: '300px',
            fontSize: 3,
            textAlign: 'center',
          }}
          type="type"
          value={userName}
          onChange={handleUserName}
          placeholder="enter user name"
        />
        <br />
        <button
          sx={{ variant: 'containers.button', color: 'white', my: '50px' }}
          onClick={addUser}
        >
          Add User
        </button>
      </div>
    </>
  );
}
