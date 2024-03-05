import { createSlice } from "@reduxjs/toolkit";
const cartFromStorage = JSON.parse(sessionStorage.getItem('cart')) || [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartFromStorage,
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const { id, selectedColor, selectedSize } = action.payload;
      state.cart = state.cart.filter(item => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;