// Action Types
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';
export const CREATE_HOTEL = 'CREATE_HOTEL';
export const CREATE_HOTEL_SUCCESS = 'CREATE_HOTEL_SUCCESS';
export const CREATE_HOTEL_FAILURE = 'CREATE_HOTEL_FAILURE';

export const GET_HOTEL_BY_ID = 'GET_HOTEL_BY_ID';
export const GET_HOTEL_SUCCESS = 'GET_HOTEL_SUCCESS';
export const GET_HOTEL_FAILURE = 'GET_HOTEL_FAILURE';

export const UPDATE_HOTEL = 'UPDATE_HOTEL';
export const UPDATE_HOTEL_SUCCESS = 'UPDATE_HOTEL_SUCCESS';
export const UPDATE_HOTEL_FAILURE = 'UPDATE_HOTEL_FAILURE';

export const DELETE_HOTEL = 'DELETE_HOTEL';
export const DELETE_HOTEL_SUCCESS = 'DELETE_HOTEL_SUCCESS';
export const DELETE_HOTEL_FAILURE = 'DELETE_HOTEL_FAILURE';

export const SEARCH_HOTELS = 'SEARCH_HOTELS';
export const SEARCH_HOTELS_SUCCESS = 'SEARCH_HOTELS_SUCCESS';
export const SEARCH_HOTELS_FAILURE = 'SEARCH_HOTELS_FAILURE';

// Actions Interfaces
export interface FetchHotelsAction {
  type: typeof FETCH_HOTELS;
}

export interface FetchHotelsSuccessAction {
  type: typeof FETCH_HOTELS_SUCCESS;
  payload: Hotel[];
}

export interface FetchHotelsFailureAction {
  type: typeof FETCH_HOTELS_FAILURE;
  payload: string;
}

export interface CreateHotelAction {
  type: typeof CREATE_HOTEL;
  payload: Hotel;
}

export interface CreateHotelSuccessAction {
  type: typeof CREATE_HOTEL_SUCCESS;
  payload: Hotel;
}

export interface CreateHotelFailureAction {
  type: typeof CREATE_HOTEL_FAILURE;
  payload: string;
}

export interface GetHotelByIdAction {
  type: typeof GET_HOTEL_BY_ID;
  payload: number;
}

export interface GetHotelSuccessAction {
  type: typeof GET_HOTEL_SUCCESS;
  payload: Hotel;
}

export interface GetHotelFailureAction {
  type: typeof GET_HOTEL_FAILURE;
  payload: string;
}

export interface UpdateHotelAction {
  type: typeof UPDATE_HOTEL;
  payload: Hotel;
}

export interface UpdateHotelSuccessAction {
  type: typeof UPDATE_HOTEL_SUCCESS;
  payload: Hotel;
}

export interface UpdateHotelFailureAction {
  type: typeof UPDATE_HOTEL_FAILURE;
  payload: string;
}

export interface DeleteHotelAction {
  type: typeof DELETE_HOTEL;
  payload: number;
}

export interface DeleteHotelSuccessAction {
  payload: number;
  type: typeof DELETE_HOTEL_SUCCESS;
}

export interface DeleteHotelFailureAction {
  type: typeof DELETE_HOTEL_FAILURE;
  payload: string;
}

export interface SearchHotelsAction {
  type: typeof SEARCH_HOTELS;
  payload: string;
}

export interface SearchHotelsSuccessAction {
  type: typeof SEARCH_HOTELS_SUCCESS;
  payload: Hotel[];
}

export interface SearchHotelsFailureAction {
  type: typeof SEARCH_HOTELS_FAILURE;
  payload: string;
}

export type HotelActionTypes = FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsFailureAction | CreateHotelAction | CreateHotelSuccessAction | CreateHotelFailureAction   | FetchHotelsAction
| FetchHotelsSuccessAction
| FetchHotelsFailureAction
| CreateHotelAction
| CreateHotelSuccessAction
| CreateHotelFailureAction
| GetHotelByIdAction
| GetHotelSuccessAction
| GetHotelFailureAction
| UpdateHotelAction
| UpdateHotelSuccessAction
| UpdateHotelFailureAction
| DeleteHotelAction
| DeleteHotelSuccessAction
| DeleteHotelFailureAction
| SearchHotelsAction
| SearchHotelsSuccessAction
| SearchHotelsFailureAction;

// State Type
export interface Hotel {
  id: number;
  title: string;
  createdDate: string;
  isLiked: boolean;
  text: string;
  imageUrl: string;
}

export interface HotelState {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
}


export interface HotelApiResponse {
    data: Hotel[];
    message?: string;
  }
  
  export interface SingleHotelApiResponse {
    data: Hotel;
    message?: string;
  }