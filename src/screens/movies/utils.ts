import {Movie} from '../../modules/movies/types';

type MoviesFilter = (movies: Movie[], term: string) => Movie[];
export const filterMovies: MoviesFilter = (movies, term) =>
  movies.filter(
    movie => movie.title.toLowerCase().indexOf(term.toLowerCase()) >= 0,
  );
