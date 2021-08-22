import React, {useEffect, useState} from 'react';
import {MovieList} from '../../modules/movies/types';
import MoviesService from '../../modules/movies';
import {Text} from 'react-native';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieList>([]);

  useEffect(() => {
    MoviesService.fetchMovies().then(fetchedMovies => setMovies(fetchedMovies));
  }, []);

  return (
    <>
      {movies.map(movie => (
        <Text key={movie.episodeId}>{movie.title}</Text>
      ))}
    </>
  );
};

export default Movies;
