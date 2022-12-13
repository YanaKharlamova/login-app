import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import authSlice from "./auth-slice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { allUsers: usersSlice.reducer, auth: authSlice.reducer },
  middleware: [saga],
  preloadedState: {},
});

sagaMiddleware.run(rootSaga); //pass into run() our root saga

export default store;
