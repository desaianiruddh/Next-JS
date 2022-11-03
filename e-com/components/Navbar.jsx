import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/" legacyBehavior>
        <a className="text-lg font-bold">amazona</a>
      </Link>
      <div>
        <Link href="/cart" legacyBehavior>
          <a className="p-2">Cart</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
