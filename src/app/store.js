import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/products/product";
import cartSlice from "../features/cart/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartSlice,
  },
});

export default store;
