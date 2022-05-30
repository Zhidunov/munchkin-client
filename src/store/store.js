import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import authSlice from "./slices/authSlice";
import boardsSlice from "./slices/boardsSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    boards: boardsSlice,
  },
});
