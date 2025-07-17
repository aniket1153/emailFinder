import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import plansSaga from "./plans.saga";
import emailAccountSaga from "./emailaccount.saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    plansSaga(),
    emailAccountSaga(),
    // add other sagas here
  ]);
}
