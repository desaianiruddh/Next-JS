/** @jsxImportSource theme-ui */
import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      height: '50px',
      width: '100vw',
      bg: '#000',
      borderBottom: '2px solid',
      borderTop: '2px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href="/">
        <a
          sx={{ color: 'text', fontSize: 3, cursor: 'pointer', color: 'white' }}
        >
          Home
        </a>
      </Link>
      <Link href="/dynamic">
        <a
          sx={{ color: 'text', fontSize: 3, cursor: 'pointer', color: 'white' }}
        >
          Dynamic
        </a>
      </Link>
      <Link href="/demo">
        <a
          sx={{ color: 'text', fontSize: 3, cursor: 'pointer', color: 'white' }}
        >
          Demo
        </a>
      </Link>
      <Link href="/user-list">
        <a
          sx={{ color: 'text', fontSize: 3, cursor: 'pointer', color: 'white' }}
        >
          Users
        </a>
      </Link>
      <Link href="/add-new-user">
        <a
          sx={{ color: 'text', fontSize: 3, cursor: 'pointer', color: 'white' }}
        >
          Add New User
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
