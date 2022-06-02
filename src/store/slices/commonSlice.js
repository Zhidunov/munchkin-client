import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    isShowTooltip: false,
    tooltipCard: {},
  },
  reducers: {
    setIsShowTooltip: (state, action) => {
      state.isShowTooltip = action.payload;
    },
    setTooltipCard: (state, action) => {
      state.tooltipCard = action.payload;
    },
  },
});

export const { setIsShowTooltip, setTooltipCard } = commonSlice.actions;

export const selectIsShowTooltip = (state) => state.common.isShowTooltip;
export const selectTooltipCard = (state) => state.common.tooltipCard;

export default commonSlice.reducer;
