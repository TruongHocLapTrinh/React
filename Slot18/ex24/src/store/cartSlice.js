import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.quantity = quantity;
      }
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
