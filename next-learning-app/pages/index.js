/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [userNumber, setUserNumber] = useState(null);
  const handleUserNumber = (e) => {
    e = e.target.value;
    setUserNumber(e);
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div sx={{ variant: 'containers.pageContent' }}>
        <div>Hello You are on Home Page</div>
        <input
          sx={{
            border: '2px solid blue',
            borderRadius: '10px',
            width: '300px',
            fontSize: 3,
            textAlign: 'center',
          }}
          type="number"
          value={userNumber}
          onChange={handleUserNumber}
          placeholder="enter user number"
        />
        <br />
        <button sx={{ variant: 'containers.button' }}>
          <Link href="/dynamic/[id]" as={`/dynamic/${userNumber}`}>
            <a sx={{ color: 'text', cursor: 'pointer', color: 'white' }}>
              Go to User Profile
            </a>
          </Link>
        </button>
      </div>
    </>
  );
}
