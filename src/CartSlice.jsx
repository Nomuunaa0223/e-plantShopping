import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action) => {
      const item = state.find(p => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
