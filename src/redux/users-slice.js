import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
    currentUser: null,
    isAuthorizedUser: false,
  },
  reducers: {
    //add new user if it doesnt exist in system yet
    authorize: (state, action) => {
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
        });
      }
    },
    goInPersonalAccount: (state, action) => {
      //chech if this user exists
      const userToAuthorizeEmail = action.payload;
      const existUser = state.users.find(
        (user) => user.email === userToAuthorizeEmail
      );
      if (existUser) {
        console.log("existUser", existUser);
        state.currentUser = existUser; // is it correct?
        state.isAuthorizedUser = true;
      }
    },
    logout: (state) => {
      state.isAuthorizedUser = false;
      state.currentUser = null;
    },
  },
});
export const { authorize, goInPersonalAccount, logout } = usersSlice.actions;
export const allUsers = (state) => state.allUsers.users;
export const isAuthorizedUser = (state) => state.allUsers.isAuthorizedUser;
export const currentUser = (state) => state.allUsers.currentUser;
export default usersSlice;
