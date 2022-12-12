import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import authSlice from "../app/auth-slice";

export default configureStore({
  reducer: { allUsers: usersSlice.reducer, auth: authSlice.reducer },
});
