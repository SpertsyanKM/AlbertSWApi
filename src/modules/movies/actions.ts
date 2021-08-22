import {Action} from 'redux';
import {MovieList} from './types';

export const ACTION_SET_MOVIES = 'ACTION_SET_MOVIES';
export type ActionSetMovies = Action<typeof ACTION_SET_MOVIES> & {
  movies: MovieList;
};
export const setMovies = (movies: MovieList): ActionSetMovies => ({
  type: ACTION_SET_MOVIES,
  movies,
});
