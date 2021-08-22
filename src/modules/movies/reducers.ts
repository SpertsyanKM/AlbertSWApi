import {Reducer} from 'react';
import {MovieList} from './types';
import {ACTION_SET_MOVIES, ActionSetMovies} from './actions';

export const movies: Reducer<MovieList, ActionSetMovies> = (
  state = [],
  action,
) => {
  if (action.type === ACTION_SET_MOVIES) {
    return action.movies;
  }

  return state;
};
