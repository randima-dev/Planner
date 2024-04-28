import { all, fork } from "redux-saga/effects";
import navigationDetailsSaga from "./navigation";
import vaccineDataSaga from "./vaccines";


/*TODO: it's need to configure newly added Saga here.*/
export function* rootSaga() {
  yield all([
    fork(navigationDetailsSaga),
    fork(vaccineDataSaga),
  ]);
}
