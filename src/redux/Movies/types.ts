export type Movie = {
  backgroundImg: string;
  cardImg: string;
  description: string;
  id: string;
  subtitle: string;
  title: string;
  titleImg: string;
  type: string;
};

export type MoviesReducerState = {
  movies: Movie[];
  loading: string;
};
