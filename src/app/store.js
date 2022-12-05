import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../app/user-slice";
import authSlice from "../app/auth-slice";

export default configureStore({
  reducer: { user: userSlice.reducer, auth: authSlice.reducer },
});
