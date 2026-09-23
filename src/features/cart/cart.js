import { createSlice } from "@reduxjs/toolkit";

import { quantity, price } from "../../components/helper/helper";

const initialState = {
  selectedItems: [],
  counteItems: 0,
  total: 0,
  checkeOut: false,
};

const cartSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.counteItems = quantity(state.selectedItems);
      state.total = price(state.selectedItems);
      state.checkeOut = false;
    },
    deleteItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.counteItems = quantity(state.selectedItems);
      state.total = price(state.selectedItems);
      state.checkeOut = false;
    },
    increaseItem: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[index].quantity++;
      state.counteItems = quantity(state.selectedItems);
      state.total = price(state.selectedItems);
      state.checkeOut = false;
    },
    decreaseItem: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[index].quantity--;
      state.counteItems = quantity(state.selectedItems);
      state.total = price(state.selectedItems);
      state.checkeOut = false;
    },
    checkeOut: (state) => {
      state.selectedItems = [];
      state.counteItems = 0;
      state.total = 0;
      state.checkeOut = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, deleteItem, increaseItem, decreaseItem ,checkeOut} =
  cartSlice.actions;
