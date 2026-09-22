import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/products/product";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
