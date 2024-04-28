import {
   FETCH_VACCINE_DATA_REQUEST,
   FETCH_VACCINE_DATA_SUCCESS,
   FETCH_VACCINE_DATA_FAILURE,
   CHANGE_VACCINE_STATUS_REQUEST,
   CHANGE_VACCINE_STATUS_FAILURE,
} from '../../constants';
import { VaccineDataActionTypes } from '../../actions/vaccines';
import { Vaccine } from '../../../types';

interface VaccineDataState {
   vaccineData: Vaccine[];
   loading: boolean;
   error: Error | null;
}

const initialState: VaccineDataState = {
   vaccineData: [],
   loading: false,
   error: null,
};

const vaccineDataReducer = (
   state: VaccineDataState = initialState,
   action: VaccineDataActionTypes
): VaccineDataState => {
   switch (action.type) {
      case FETCH_VACCINE_DATA_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         };
      case FETCH_VACCINE_DATA_SUCCESS:
         return {
            ...state,
            loading: false,
            vaccineData: action.payload,
            error: null,
         };

      case CHANGE_VACCINE_STATUS_REQUEST:
         return {
            ...state,
            loading: false,
            vaccineData: state.vaccineData.map((vaccine) => {
               if (vaccine.vaccineId === action.payload.vaccineId) {
                  const statusValue = action.payload.isVaccineReceived? {status: 'COMPLETED'}: {status: vaccine.status}
                  return {
                     ...vaccine,
                     ...statusValue,
                     isVaccineReceived: action.payload.isVaccineReceived,
                  };
               }
               return vaccine;
            }),
            error: null,
         };
      case FETCH_VACCINE_DATA_FAILURE:
      case CHANGE_VACCINE_STATUS_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.error,
         };
      default:
         return state;
   }
};

export default vaccineDataReducer;
