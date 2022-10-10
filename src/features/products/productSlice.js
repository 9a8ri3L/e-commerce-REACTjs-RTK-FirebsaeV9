import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  filter: "?limit=8&skip=9",
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (filter, thunkAPI) => {
    try {
      const API_URL = "https://dummyjson.com/products";
      const response = await axios.get(`${API_URL}/${filter}`);
      const { products } = response.data;
      return products;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filter = action.payload;
    },
    resetProducts: (state) => {
      state.products = [];
      state.filter = "?limit=8&skip=9";
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { filterProducts, resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
