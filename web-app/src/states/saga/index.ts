import { all, fork } from "redux-saga/effects";
import hotelSaga from "../saga/hotel"


/*TODO: it's need to configure newly added Saga here.*/
export function* rootSaga() {
  yield all([
    fork(hotelSaga),
  ]);
}
