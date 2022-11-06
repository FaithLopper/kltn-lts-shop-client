import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList(state, action) {
      state.productList.push(action.payload);
    },
  },
});

export const { setProductList } = product.actions;
export default product.reducer;
