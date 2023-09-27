import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    modifyItem: (state, action) => {
      const { id, count } = action.payload;
      const item = state.list.find((item) => item.id === id);
      if (item) {
        item.count = count;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.list = state.list.filter((item) => item.id !== itemId);
    },
    incrementItem: (state, action) => {
      const { id } = action.payload;
      const item = state.list.find((item) => item.id === id);
      if (item) {
        item.count += 1;
      }
    },
    decrementItem: (state, action) => {
      const { id } = action.payload;
      const item = state.list.find((item) => item.id === id);
      if (item && item.count > 1) {
        item.count -= 1;
      } else {
        state.list = state.list.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItem, modifyItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
