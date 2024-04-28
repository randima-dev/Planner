import { UserDetails } from '../../../types';
import {
   CHANGE_TAB,
   FETCH_USER_DETAILS_REQUEST,
   FETCH_USER_DETAILS_SUCCESS,
   FETCH_USER_DETAILS_FAILURE,
} from '../../constants';

interface ChangeTabAction {
   type: typeof CHANGE_TAB;
   payload: number | string;
}

export interface FetchUserDetailsRequestAction {
   type: typeof FETCH_USER_DETAILS_REQUEST;
   payload: string;
}

export interface FetchUserDetailsSuccessAction {
   type: typeof FETCH_USER_DETAILS_SUCCESS;
   payload: UserDetails[];
}

export interface FetchUserDetailsFailureAction {
   type: typeof FETCH_USER_DETAILS_FAILURE;
   payload: Error;
}

export type TabActionTypes =
   | ChangeTabAction
   | FetchUserDetailsRequestAction
   | FetchUserDetailsSuccessAction
   | FetchUserDetailsFailureAction;

export const changeTab = (tabIndex: number | string): ChangeTabAction => ({
   type: CHANGE_TAB,
   payload: tabIndex,
});

export const fetchUserDetailsRequest = (
   userId: string
): FetchUserDetailsRequestAction => ({
   type: FETCH_USER_DETAILS_REQUEST,
   payload: userId,
});

export const fetchUserDetailsSuccess = (
   userDetails: UserDetails[]
): FetchUserDetailsSuccessAction => ({
   type: FETCH_USER_DETAILS_SUCCESS,
   payload: userDetails,
});

export const fetchUserDetailsFailure = (
   error: Error
): FetchUserDetailsFailureAction => ({
   type: FETCH_USER_DETAILS_FAILURE,
   payload: error,
});
