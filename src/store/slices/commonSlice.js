import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    isShowTooltip: false,
    description: "",
  },
  reducers: {
    setIsShowTooltip: (state, action) => {
      state.isShowTooltip = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setIsShowTooltip, setDescription } = commonSlice.actions;

export const selectIsShowTooltip = (state) => state.common.isShowTooltip;
export const selectDescription = (state) => state.common.description;

export default commonSlice.reducer;
