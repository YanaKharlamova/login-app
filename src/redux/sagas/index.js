import { call, takeEvery, delay, select } from "redux-saga/effects";
// import { push } from "connected-react-router";
// import { RouteNames, Routes } from "../../routes";
import { currentUser } from "../users-slice"; //we use these selectors to use data from store inside sagas
import { toastifyAlert } from "../../helpers/toastify-alerts";

function* handleLoginUser() {
  try {
    const currentLoggedInUser = yield select(currentUser);

    localStorage.setItem(
      "authorizedCurrentUser",
      JSON.stringify(currentLoggedInUser)
    );

    yield delay(500);
    yield call(toastifyAlert, "success");
  } catch {
    yield call(toastifyAlert, "fail");
  }
}

//logout
// function* handleLogout() {
//   yield delay(500);
//   localStorage.removeItem("authorizedCurrentUser");
//   // yield put(push('/'));// use 'connected-react-router'
// }

//to fetch news

export function* watchUserLoginSaga() {
  yield takeEvery("allUsers/goInPersonalAccount", handleLoginUser);
}

export default function* rootSaga() {
  //run created watcher - watchClickSaga:
  yield watchUserLoginSaga();
}
