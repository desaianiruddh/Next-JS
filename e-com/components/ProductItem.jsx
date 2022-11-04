import Link from 'next/link';
import React, { use } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => dispatch(addProduct({ ...product, quantity: 1 }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
