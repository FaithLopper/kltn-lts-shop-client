import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: null,
};

const category = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryList } = category.actions;
export default category.reducer;
