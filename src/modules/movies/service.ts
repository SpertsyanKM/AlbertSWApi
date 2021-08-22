import {Character, MovieApi, MovieList, Species} from './types';
import {getApi} from '../api';
import {convertApiMovie} from './utils';

type MoviesFetcher = () => Promise<MovieList>;
const fetchMovies: MoviesFetcher = async () => {
  const response = await getApi<{results: MovieApi[]}>('films');
  return response.results.map(convertApiMovie);
};

type CharactersFetcher = (urls: string[]) => Promise<Character[]>;
const fetchCharacters: CharactersFetcher = async urls => {
  const promises = urls.map(url => getApi<Character>(url, true));
  return await Promise.all(promises);
};

type SpeciesFetcher = (urls: string[]) => Promise<Species[]>;
const fetchSpecies: SpeciesFetcher = async urls => {
  const promises = urls.map(url => getApi<Species>(url, true));
  return await Promise.all(promises);
};

const MoviesService = {
  fetchMovies,
  fetchCharacters,
  fetchSpecies,
};

export default MoviesService;
