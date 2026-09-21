import { asyncThunkCreator, createreSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  product: [],
  error: "",
};

const fetchProduct = asyncThunkCreator("product/fetchProduct", () => {
  return api.get("/products");
});

const productSlice = createreSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfiled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});
export default productSlice.reducer;
export { fetchProduct };
