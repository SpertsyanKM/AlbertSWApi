import {MovieApi, MovieList} from './types';
import {getApi} from '../api';
import {convertApiMovie} from './utils';

type MoviesFetcher = () => Promise<MovieList>;
const fetchMovies: MoviesFetcher = async () => {
  const response = await getApi<{results: MovieApi[]}>('films');
  console.log(response);
  return response.results.map(convertApiMovie);
};

const MoviesService = {
  fetchMovies,
};

export default MoviesService;
