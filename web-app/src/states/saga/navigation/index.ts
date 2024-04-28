import { put, takeLatest } from 'redux-saga/effects';
import {
   fetchUserDetailsFailure,
   fetchUserDetailsRequest,
   fetchUserDetailsSuccess,
} from '../../actions/navigations';
import { FETCH_USER_DETAILS_REQUEST } from '../../constants';

function* fetchUserDetailsSaga(
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   action: ReturnType<typeof fetchUserDetailsRequest>
) {
   try {
      //const userDetails = yield call(api.fetchUserDetails, action.payload);
      const userDetails = [{ userName: 'You' }, { userName: 'Sarah' }];
      yield put(fetchUserDetailsSuccess(userDetails));
   } catch (error: unknown) {
      yield put(fetchUserDetailsFailure(error as Error));
   }
}

function* navigationDetailsSaga() {
   yield takeLatest(FETCH_USER_DETAILS_REQUEST, fetchUserDetailsSaga);
}

export default navigationDetailsSaga;
