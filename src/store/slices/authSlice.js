import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userName: "Никита",
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = authSlice.actions;

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserName = (state) => state.auth.userName;

export default authSlice.reducer;
