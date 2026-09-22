import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProduct =createAsyncThunk ("product/fetchProduct", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export default productSlice.reducer;
export { fetchProduct };
