import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import plansSaga from "./plans.saga";
import emailAccountSaga from "./emailaccount.saga";
import dashBoardSaga from "./dashBoard.saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    plansSaga(),
    emailAccountSaga(),
    dashBoardSaga(),
    // add other sagas here
  ]);
}
