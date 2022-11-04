import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: { cartItems: [] },
  },
  reducers: {
    addProduct: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      state.cart = { cartItems };
    },
    reset: (state) => {
      state.cart.cartItems = [];
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
