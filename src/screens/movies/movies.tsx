import React, {useEffect, useState} from 'react';
import {Movie, MovieList} from '../../modules/movies/types';
import MoviesService from '../../modules/movies';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import MoviePreview from './moviePreview';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieList>([]);

  useEffect(() => {
    MoviesService.fetchMovies().then(fetchedMovies => setMovies(fetchedMovies));
  }, []);

  const renderMovie: ListRenderItem<Movie> = ({item}) => (
    <MoviePreview movie={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.episodeId.toString()}
      />
    </SafeAreaView>
  );
};

export default Movies;
