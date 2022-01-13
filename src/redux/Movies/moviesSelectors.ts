import { RootState } from "../rootReducer";

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
