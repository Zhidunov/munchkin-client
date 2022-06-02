import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { userId, roomId },
  } = getState();
  const { data } = await axios.get(
    `http://localhost/user?userId=${userId}&roomId=${roomId}`
  );

  dispatch(setUser(data.current_user));
};

export const selectCurrentUser = (state) => state.user.user;

export default userSlice.reducer;
