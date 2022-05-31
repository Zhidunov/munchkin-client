import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import authSlice from "./slices/authSlice";
import boardsSlice from "./slices/boardsSlice";
import commonSlice from "./slices/commonSlice";
import logsSlice from "./slices/logsSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    boards: boardsSlice,
    common: commonSlice,
    logs: logsSlice,
  },
});
