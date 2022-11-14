import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart'))
      : { cartItems: [] },
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const newItem = payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart }));
      state.cart = { cartItems };
    },
    removeProduct: (state, { payload }) => {
      state.cart.cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== payload
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart }));
    },
    updateQuantity: (state, { payload }) => {
      state.cart.cartItems = state.cart.cartItems.map((item) => {
        if (item.slug === payload.slug) {
          return {
            ...item,
            quantity: payload.quantity,
          };
        }
        return item;
      });
      Cookies.set('cart', JSON.stringify({ ...state.cart }));
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
