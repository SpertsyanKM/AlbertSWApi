import {MovieApi, Movie} from './types';

type ApiMovieConverter = (movieApi: MovieApi) => Movie;
export const convertApiMovie: ApiMovieConverter = (movieApi: MovieApi) => {
  const releaseDate = new Date(movieApi.release_date);
  return {
    title: movieApi.title,
    releaseDate,
    releaseYear: releaseDate.getFullYear(),
    episodeId: movieApi.episode_id,
  };
};
