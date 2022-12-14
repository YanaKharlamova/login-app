import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import authSlice from "./auth-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { allUsers: usersSlice.reducer, auth: authSlice.reducer },
  middleware: [saga],
  preloadedState: {},
});

saga.run(rootSaga); //pass into run() our root saga

export default store;
