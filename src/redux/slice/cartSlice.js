import { createSlice } from "@reduxjs/toolkit";
const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartFromStorage,
  },
  reducers: {
    addToCart(state, action) {
      const productToAd = { ...action.payload, quantity: 1 };
      state.cart.push(productToAd);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCart(state, action) {
      const { id, selectedColor, selectedSize, quantity } = action.payload;
      const index = state.cart.findIndex(item => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
      if (index !== -1) {
        state.cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }

    },
    removeFromCart(state, action) {
      const { id, selectedColor, selectedSize } = action.payload;
      state.cart = state.cart.filter(item => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeAllCart(state) {
      state.cart = [];
      localStorage.removeItem('cart', JSON.stringify(state.cart));
    }

  },
});

export const { addToCart, removeFromCart, updateCart, removeAllCart } = cartSlice.actions;

export default cartSlice.reducer;