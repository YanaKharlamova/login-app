import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isAuthorizedUser: false,
  },
  reducers: {
    authorize: (state, action) => {
      // state.user = action.payload;
      const userToAuthorize = action.payload;

      const existUser = state.users.find(
        (user) => user.id === userToAuthorize.id
      );
      if (!existUser) {
        state.users.push({
          id: userToAuthorize.id,
          name: userToAuthorize.name,
          password: userToAuthorize.password,
          email: userToAuthorize.email,
          currentlyOnline: false,
        });
      }
    },
    goInPersonalAccount: (state, action) => {
      const userToAuthorizeEmail = action.payload;
      const existUser = state.users.find(
        (user) => user.email === userToAuthorizeEmail
      );

      if (existUser) {
        existUser.currentlyOnline = true;
        state.isAuthorizedUser = true;
      } //do wlse statement
    },
    logout: (state) => {
      state.isAuthorizedUser = false;
    },
  },
});
export const { authorize, goInPersonalAccount, logout } = userSlice.actions;
export const allUsers = (state) => state.user.users;
export const isAuthorizedUser = (state) => state.user.isAuthorizedUser;
export default userSlice;
