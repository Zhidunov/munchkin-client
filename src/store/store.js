import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import boardsSlice from "./slices/boardsSlice";
import commonSlice from "./slices/commonSlice";
import logsSlice from "./slices/logsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    boards: boardsSlice,
    common: commonSlice,
    logs: logsSlice,
  },
});
