import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/moviesSlice";

export const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
