// saga.ts
import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_VACCINE_DATA_REQUEST } from '../../constants';
import {
   fetchVaccineDataFailure,
   fetchVaccineDataSuccess,
} from '../../actions/vaccines';

function* fetchVaccineDataSaga() {
   try {
      //const vaccineData = yield call(api.fetchVaccineData);
      const vaccineData = [
         {
            vaccineId: 1,
            title: 'Chickenpox',
            status: 'SCHEDULED',
            dateValue: '19th Jan',
            boosterValue: 'Yearly',
         },
         {
            vaccineId: 2,
            title: 'Influenza',
            status: 'OVERDUE',
            dateValue: '1 Week',
            boosterValue: 'Yearly',
         },
        
         {
            vaccineId: 4,
            title: 'MenB',
            status: 'COMPLETED',
            dateValue: 'Arexvy',
            boosterValue: 'Yearly',
         },
         {
            vaccineId: 5,
            title: 'RSV',
            status: 'VERIFIED',
            dateValue: 'Arexvy',
            boosterValue: '',
         }, {
            vaccineId: 3,
            title: 'MenB',
            status: 'RECOMMENDED',
            dateValue: '19th Jan',
            boosterValue: '2nd',
            isSuggestedVaccine: true,
            isVaccineReceived: true,
         },
         {
            vaccineId: 7,
            title: 'MenB',
            status: 'RECOMMENDED',
            dateValue: '19th Jan',
            boosterValue: '2nd',
            isSuggestedVaccine: true,
            isVaccineReceived: null,
         },{
            vaccineId: 8,
            title: 'Hepatitis B',
            status: 'UNVACCINATED',
            dateValue: null,
            boosterValue: 'Unvaccinated',
         },{
            vaccineId: 9,
            title: 'MenB',
            status: 'RECOMMENDED',
            dateValue: '19th Jan',
            boosterValue: '2nd',
            isSuggestedVaccine: true,
            isVaccineReceived: null,
         },
      ];
      yield put(fetchVaccineDataSuccess(vaccineData));
   } catch (error: unknown) {
      yield put(fetchVaccineDataFailure(error as Error));
   }
}

function* vaccineDataSaga() {
   yield takeLatest(FETCH_VACCINE_DATA_REQUEST, fetchVaccineDataSaga);
}

export default vaccineDataSaga;
