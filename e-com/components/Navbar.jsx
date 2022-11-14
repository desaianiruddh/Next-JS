import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    setCartItemCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/" legacyBehavior>
        <a className="text-lg font-bold">amazona</a>
      </Link>
      <div>
        <Link href="/cart" legacyBehavior>
          <a className="p-2">
            Cart
            {cartItemCount > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
