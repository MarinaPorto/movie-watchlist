import { configureStore } from "@reduxjs/toolkit";
import { activeListReducer } from "./reducers/active-list";
import { moviesListReducer } from "./reducers/all-movies-list";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const rootReducer = combineReducers({
  activeList: activeListReducer,
  moviesList: moviesListReducer,

})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);