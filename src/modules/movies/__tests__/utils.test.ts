import {Movie, MovieApi} from '../types';
import {convertApiMovie} from '../utils';

describe('convertApiMovie', () => {
  it('Default case', () => {
    // prepare
    const apiResponse: MovieApi = {
      title: 'TestTitle',
      release_date: '2021/08/22',
      episode_id: 1,
      characters: ['url1', 'url2'],
    };
    const expected: Movie = {
      title: 'TestTitle',
      releaseYear: 2021,
      episodeId: 1,
      releaseDate: new Date('2021/08/22'),
      characters: ['url1', 'url2'],
    };
    // test
    const result = convertApiMovie(apiResponse);
    // verify
    expect(result).toEqual(expected);
  });
});
