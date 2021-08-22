import {Movie} from '../../../modules/movies/types';
import {filterMovies} from '../utils';

describe('filterMovies', () => {
  const defaultParams = {
    episodeId: 1,
    releaseYear: 2021,
    releaseDate: new Date(),
    characters: [],
  };

  const defaultMovie: Movie = {
    title: 'test1',
    ...defaultParams,
  };
  const caseSensitiveMovie: Movie = {
    title: 'teSt2',
    ...defaultParams,
  };
  const singleCharacterMovie: Movie = {
    title: '3',
    ...defaultParams,
  };
  const movieList: Movie[] = [
    defaultMovie,
    caseSensitiveMovie,
    singleCharacterMovie,
  ];

  it('Common case', () => {
    // prepare
    // test
    const result = filterMovies(movieList, 'te');
    // verify
    expect(result).toEqual([defaultMovie, caseSensitiveMovie]);
  });

  it('Case sensitive', () => {
    // prepare
    // test
    const result = filterMovies(movieList, 'test');
    // verify
    expect(result).toEqual([defaultMovie, caseSensitiveMovie]);
    // test
    const result2 = filterMovies(movieList, 'TEST');
    // verify
    expect(result2).toEqual([defaultMovie, caseSensitiveMovie]);
  });

  it('Single character', () => {
    // prepare
    // test
    const result = filterMovies(movieList, '3');
    // verify
    expect(result).toEqual([singleCharacterMovie]);
  });

  it('Empty movies', () => {
    // prepare
    // test
    const result = filterMovies([], 'te');
    // verify
    expect(result).toEqual([]);
  });

  it('Empty result', () => {
    // prepare
    // test
    const result = filterMovies(movieList, 'test4');
    // verify
    expect(result).toEqual([]);
  });
});
