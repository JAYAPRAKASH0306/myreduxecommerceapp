import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list = [...state.list, { ...action.payload, quantity: 1 }];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const itemToIncrement = state.list.find(item => item.id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemToDecrement = state.list.find(item => item.id === action.payload);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
