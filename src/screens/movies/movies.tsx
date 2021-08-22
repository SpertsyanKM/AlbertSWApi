import React, {useEffect, useState} from 'react';
import {Movie, MovieList} from '../../modules/movies/types';
import MoviesService from '../../modules/movies';
import {FlatList, ListRenderItem} from 'react-native';
import MoviePreview from './moviePreview';
import Loader from '../../components/loader';
import {Container, ErrorMessage} from './moviesStyles';
import {NavigationProp, Screens} from '../../modules/navigation';

type Props = NavigationProp<{}>;
const Movies: React.FC<Props> = ({navigation}) => {
  const [movies, setMovies] = useState<MovieList>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);

  useEffect(() => {
    MoviesService.fetchMovies()
      .then(fetchedMovies => {
        setMovies(fetchedMovies);
        setIsLoading(false);
        setLoadingFailed(false);
      })
      .catch(_ => setLoadingFailed(true));
  }, []);

  const onMoviePress = (movie: Movie) => {
    navigation.navigate(Screens.Movie, {movie});
  };

  const renderMovie: ListRenderItem<Movie> = ({item}) => (
    <MoviePreview movie={item} onPress={onMoviePress} />
  );

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && !loadingFailed && (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={item => item.episodeId.toString()}
        />
      )}
      {loadingFailed && <ErrorMessage>Failed to load data.</ErrorMessage>}
    </Container>
  );
};

export default Movies;
