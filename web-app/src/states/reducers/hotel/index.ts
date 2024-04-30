import * as actionTypes from "../../types/hotel";

const initialState: actionTypes.HotelState = {
  hotels: [],
  loading: false,
  error: null,
};

export const hotelReducer = (
  state = initialState,
  action: actionTypes.HotelActionTypes
): actionTypes.HotelState => {
  switch (action.type) {
    case actionTypes.FETCH_HOTELS:
    case actionTypes.GET_HOTEL_BY_ID:
    case actionTypes.SEARCH_HOTELS:
    case actionTypes.CREATE_HOTEL:
    case actionTypes.UPDATE_HOTEL:
    case actionTypes.DELETE_HOTEL:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_HOTELS_SUCCESS:
    case actionTypes.SEARCH_HOTELS_SUCCESS:
      return { ...state, loading: false, hotels: action.payload, error: null };

    case actionTypes.GET_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: [action.payload],
        error: null,
      };

    case actionTypes.CREATE_HOTEL_SUCCESS:
    case actionTypes.UPDATE_HOTEL_SUCCESS:
      const updatedHotels = state.hotels.map((hotel) =>
        hotel.id === action.payload.id ? action.payload : hotel
      );
      return { ...state, loading: false, hotels: updatedHotels, error: null };

    case actionTypes.DELETE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: state.hotels.filter((hotel) => hotel.id !== action.payload),
        error: null,
      };

    case actionTypes.FETCH_HOTELS_FAILURE:
    case actionTypes.GET_HOTEL_FAILURE:
    case actionTypes.CREATE_HOTEL_FAILURE:
    case actionTypes.UPDATE_HOTEL_FAILURE:
    case actionTypes.DELETE_HOTEL_FAILURE:
    case actionTypes.SEARCH_HOTELS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
