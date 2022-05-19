import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/Login.module.css';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [cookies] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (cookies) {
      router.push('/admin');
    }
  }, [cookies]);
  const handleClick = async () => {
    try {
      await axios.post('http://localhost:3000/api/login/admin', {
        username,
        password,
      });
      router.push('/admin');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
