import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: []
  },
  reducers: {
    addItem: (state, action) => {
      state.list = [...state.list, action.payload]; // Remove the extra curly braces around payload
    }
  }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
