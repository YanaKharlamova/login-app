import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
console.log("userSlice", userSlice);
export const { login, logout } = userSlice.actions; //export actions
//exporting state:
export const selectUser = (state) => state.user?.user; //user? -this ? fixed my error "cant read property .user of null"
export default userSlice.reducer; //export reducer
