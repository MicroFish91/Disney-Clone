import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;

export const selectMovie = (id: string | undefined) => {
  return createSelector(selectMovies, (movies) => {
    return movies.find((movie) => movie.id === id);
  });
};
