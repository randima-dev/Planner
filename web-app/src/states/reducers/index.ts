import { combineReducers } from "redux";
import { hotelReducer } from "../reducers/hotel";

const rootReducer = combineReducers({
  hotel: hotelReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
