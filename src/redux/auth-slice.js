import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    // logout: (state) => {
    //   state.isLoggedIn = false;
    // },
  },
});

export const { login, logout } = authSlice.actions;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice;
