import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import * as actionTypes from "../../types/hotel";
import * as actions from "../../actions/hotel";
import { HotelApiResponse, SingleHotelApiResponse } from "../../types/hotel";

// Fetch Hotels Saga
function* fetchHotelsSaga(): Generator<
  any,
  void,
  AxiosResponse<HotelApiResponse>
> {
  try {
    const response: AxiosResponse<HotelApiResponse> = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/hotels`
    );
    yield put(actions.fetchHotelsSuccess(response.data as unknown as actionTypes.Hotel[]));
  } catch (error: any) {
    yield put(actions.fetchHotelsFailure(error.message));
  }
}

// Create Hotel Saga
function* createHotelSaga(
  action: actionTypes.CreateHotelAction
): Generator<any, void, AxiosResponse<SingleHotelApiResponse>> {
  try {
    const response: AxiosResponse<SingleHotelApiResponse> = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/hotels`,
      action.payload
    );
    yield put(actions.createHotelSuccess(response.data.data));
  } catch (error: any) {
    yield put(actions.createHotelFailure(error.message));
  }
}

function* getHotelByIdSaga(action: actionTypes.GetHotelByIdAction): Generator<any, any, any> {
  try {
    const response = yield call(axios.get, `${process.env.REACT_APP_API_URL}/${action.payload}`);
    yield put(actions.getHotelSuccess(response.data));
  } catch (error: any) {
    yield put(actions.getHotelFailure(error.message));
  }
}

function* updateHotelSaga(action: actionTypes.UpdateHotelAction): Generator<any, any, any> {
  try {
    const response = yield call(axios.put, `${process.env.REACT_APP_API_URL}/hotels/${action.payload.id}`, action.payload);
    yield put(actions.updateHotelSuccess(response.data));
  } catch (error: any) {
    yield put(actions.updateHotelFailure(error.message));
  }
}

function* deleteHotelSaga(action: actionTypes.DeleteHotelAction): Generator<any, any, any>  {
  try {
    yield call(axios.delete, `${process.env.REACT_APP_API_URL}/hotels/${action.payload}`);
    yield put(actions.deleteHotelSuccess());
  } catch (error: any) {
    yield put(actions.deleteHotelFailure(error.message));
  }
}

function* searchHotelsSaga(action: actionTypes.SearchHotelsAction): Generator<any, any, any>  {
  try {
    const response = yield call(axios.get, `${process.env.REACT_APP_API_URL}/hotels/search?q=${action.payload}`);
    yield put(actions.searchHotelsSuccess(response.data));
  } catch (error: any) {
    yield put(actions.searchHotelsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_HOTELS, fetchHotelsSaga);
  yield takeEvery(actionTypes.CREATE_HOTEL, createHotelSaga);
  yield takeEvery(actionTypes.FETCH_HOTELS, fetchHotelsSaga);
  yield takeEvery(actionTypes.GET_HOTEL_BY_ID, getHotelByIdSaga);
  yield takeEvery(actionTypes.UPDATE_HOTEL, updateHotelSaga);
  yield takeEvery(actionTypes.DELETE_HOTEL, deleteHotelSaga);
  yield takeEvery(actionTypes.SEARCH_HOTELS, searchHotelsSaga);
}
