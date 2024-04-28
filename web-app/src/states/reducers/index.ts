import { combineReducers } from "redux";
import navigationReducer from './navigations'
import vaccineDataReducer from "./vaccines";


const rootReducer = combineReducers({
    navigation: navigationReducer,
    vaccines: vaccineDataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
