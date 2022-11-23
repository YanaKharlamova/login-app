import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";//we named it differently
//in slice we export it actually like this:
//export default userSlice.reducer; 

export default configureStore({
  reducer: { user: userReducer },//our root reducer that consissts of slice reducers(for now only 1)
});
