import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userId: "user_3",
    roomId: "1",
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const { setIsAuth, setUserId, setRoomId } = authSlice.actions;

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserId = (state) => state.auth.userId;
export const selectRoomId = (state) => state.auth.roomId;

export default authSlice.reducer;
