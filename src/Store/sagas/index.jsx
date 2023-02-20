import { all } from "redux-saga/effects";
import { studWatcher } from "../Studentss/studentSaga";

export function* watchSagas() {
  yield all([studWatcher()]);
}
