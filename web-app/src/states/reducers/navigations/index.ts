import { Reducer } from 'redux';
import {
   CHANGE_TAB,
   FETCH_USER_DETAILS_FAILURE,
   FETCH_USER_DETAILS_REQUEST,
   FETCH_USER_DETAILS_SUCCESS,
} from '../../constants';
import { TabActionTypes } from '../../actions/navigations';
import { UserDetails } from '../../../types';

interface State {
   tabIndex: number | string;
   userDetails: UserDetails[] | null;
   loading: boolean;
   error: Error | null;
}

const initialState: State = {
   tabIndex: '0',
   userDetails: null,
   loading: false,
   error: null
};

const navigationReducer: Reducer<State, TabActionTypes> = (
   state = initialState,
   action
) => {
   switch (action.type) {
      case CHANGE_TAB:
         return {
            ...state,
            tabIndex: action.payload,
         };
      case FETCH_USER_DETAILS_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         };
      case FETCH_USER_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            userDetails: action.payload,
            error: null,
         };
      case FETCH_USER_DETAILS_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default navigationReducer;
