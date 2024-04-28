import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { rootSaga } from "./saga";

const initialState = {};
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

// Mount it on the Store
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;