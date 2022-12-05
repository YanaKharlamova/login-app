import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthorized: false, // in separate cause..
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});
export const { login, logout, isAuthorized } = userSlice.actions;
export const selectUser = (state) => state.user?.user;
export const selectIsAuthorized = (state) => state.user?.isAuthorized;
export default userSlice;
