import * as actionTypes from "../../types/hotel";

export const fetchHotels = (): actionTypes.FetchHotelsAction => ({
  type: actionTypes.FETCH_HOTELS,
});

export const fetchHotelsSuccess = (
  hotels: actionTypes.Hotel[]
): actionTypes.FetchHotelsSuccessAction => ({
  type: actionTypes.FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = (
  error: string
): actionTypes.FetchHotelsFailureAction => ({
  type: actionTypes.FETCH_HOTELS_FAILURE,
  payload: error,
});

export const createHotel = (
  hotel: actionTypes.Hotel
): actionTypes.CreateHotelAction => ({
  type: actionTypes.CREATE_HOTEL,
  payload: hotel,
});

export const createHotelSuccess = (
  hotel: actionTypes.Hotel
): actionTypes.CreateHotelSuccessAction => ({
  type: actionTypes.CREATE_HOTEL_SUCCESS,
  payload: hotel,
});

export const createHotelFailure = (
  error: string
): actionTypes.CreateHotelFailureAction => ({
  type: actionTypes.CREATE_HOTEL_FAILURE,
  payload: error,
});


// Action creators for getting a hotel by ID
export const getHotelById = (id: number): actionTypes.GetHotelByIdAction => ({
  type: actionTypes.GET_HOTEL_BY_ID,
  payload: id
});

export const getHotelSuccess = (hotel: actionTypes.Hotel): actionTypes.GetHotelSuccessAction => ({
  type: actionTypes.GET_HOTEL_SUCCESS,
  payload: hotel
});

export const getHotelFailure = (error: string): actionTypes.GetHotelFailureAction => ({
  type: actionTypes.GET_HOTEL_FAILURE,
  payload: error
});

// Update hotel
export const updateHotel = (hotel: actionTypes.Hotel): actionTypes.UpdateHotelAction => ({
  type: actionTypes.UPDATE_HOTEL,
  payload: hotel
});

export const updateHotelSuccess = (hotel: actionTypes.Hotel): actionTypes.UpdateHotelSuccessAction => ({
  type: actionTypes.UPDATE_HOTEL_SUCCESS,
  payload: hotel
});

export const updateHotelFailure = (error: string): actionTypes.UpdateHotelFailureAction => ({
  type: actionTypes.UPDATE_HOTEL_FAILURE,
  payload: error
});

// Delete hotel
export const deleteHotel = (id: number): actionTypes.DeleteHotelAction => ({
  type: actionTypes.DELETE_HOTEL,
  payload: id
});

export const deleteHotelSuccess = (): actionTypes.DeleteHotelSuccessAction => ({
  type: actionTypes.DELETE_HOTEL_SUCCESS,
  payload: 0
});

export const deleteHotelFailure = (error: string): actionTypes.DeleteHotelFailureAction => ({
  type: actionTypes.DELETE_HOTEL_FAILURE,
  payload: error
});

// Search hotels
export const searchHotels = (query: string): actionTypes.SearchHotelsAction => ({
  type: actionTypes.SEARCH_HOTELS,
  payload: query
});

export const searchHotelsSuccess = (hotels: actionTypes.Hotel[]): actionTypes.SearchHotelsSuccessAction => ({
  type: actionTypes.SEARCH_HOTELS_SUCCESS,
  payload: hotels
});

export const searchHotelsFailure = (error: string): actionTypes.SearchHotelsFailureAction => ({
  type: actionTypes.SEARCH_HOTELS_FAILURE,
  payload: error
});