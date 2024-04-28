// actions.ts
import { Vaccine } from '../../../types';
import {
   FETCH_VACCINE_DATA_REQUEST,
   FETCH_VACCINE_DATA_SUCCESS,
   FETCH_VACCINE_DATA_FAILURE,
   CHANGE_VACCINE_STATUS_REQUEST,
   CHANGE_VACCINE_STATUS_FAILURE,
} from '../../constants';

export type VaccineDataActionTypes =
   | FetchVaccineDataRequestAction
   | FetchVaccineDataSuccessAction
   | FetchVaccineDataFailureAction
   | ChangeVaccineStatusRequestAction
   | ChangeVaccineStatusFailureAction;

export const fetchVaccineDataRequest = (): FetchVaccineDataRequestAction => ({
   type: FETCH_VACCINE_DATA_REQUEST,
});

export const fetchVaccineDataSuccess = (
   vaccineData: Vaccine[]
): FetchVaccineDataSuccessAction => ({
   type: FETCH_VACCINE_DATA_SUCCESS,
   payload: vaccineData,
});

export const fetchVaccineDataFailure = (
   error: Error
): FetchVaccineDataFailureAction => ({
   type: FETCH_VACCINE_DATA_FAILURE,
   error,
});

export const changeVaccineStatusRequest = (
   vaccineId: string | number,
   isVaccineReceived: boolean | null
): ChangeVaccineStatusRequestAction => ({
   type: CHANGE_VACCINE_STATUS_REQUEST,
   payload: { vaccineId, isVaccineReceived },
});

export const changeVaccineStatusFailure = (
   error: Error
): ChangeVaccineStatusFailureAction => ({
   type: CHANGE_VACCINE_STATUS_FAILURE,
   error,
});

/***************** Action Interfaces *****************/

export interface FetchVaccineDataRequestAction {
   type: typeof FETCH_VACCINE_DATA_REQUEST;
}

export interface FetchVaccineDataSuccessAction {
   type: typeof FETCH_VACCINE_DATA_SUCCESS;
   payload: Vaccine[];
}

export interface FetchVaccineDataFailureAction {
   type: typeof FETCH_VACCINE_DATA_FAILURE;
   error: Error;
}

export interface ChangeVaccineStatusRequestAction {
   type: typeof CHANGE_VACCINE_STATUS_REQUEST;
   payload: {
      vaccineId: string | number;
      isVaccineReceived: boolean | null;
   };
}

export interface ChangeVaccineStatusFailureAction {
   type: typeof CHANGE_VACCINE_STATUS_FAILURE;
   error: Error;
}
