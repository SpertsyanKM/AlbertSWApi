import React, {useEffect, useState} from 'react';
import {Movie, MovieList} from '../../modules/movies/types';
import MoviesService from '../../modules/movies';
import {FlatList, ListRenderItem} from 'react-native';
import MoviePreview from './moviePreview';
import Loader from '../../components/loader';
import {Container, ErrorMessage, SearchLine} from './moviesStyles';
import {NavigationProp, Screens} from '../../modules/navigation';
import {filterMovies} from './utils';

type Props = NavigationProp<{}>;
const Movies: React.FC<Props> = ({navigation}) => {
  const [movies, setMovies] = useState<MovieList>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    MoviesService.fetchMovies()
      .then(fetchedMovies => {
        setMovies(fetchedMovies);
        setLoadingFailed(false);
      })
      .catch(_ => {
        setLoadingFailed(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onMoviePress = (movie: Movie) => {
    navigation.navigate(Screens.Movie, {movie});
  };

  const renderMovie: ListRenderItem<Movie> = ({item}) => (
    <MoviePreview movie={item} onPress={onMoviePress} />
  );

  const filteredMovies = filterMovies(movies, searchValue);

  return (
    <Container>
      {isLoading && <Loader root />}
      {!isLoading && !loadingFailed && (
        <>
          <SearchLine value={searchValue} onChange={setSearchValue} />
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={filteredMovies}
            renderItem={renderMovie}
            keyExtractor={item => item.episodeId.toString()}
          />
        </>
      )}
      {loadingFailed && <ErrorMessage>Failed to load data.</ErrorMessage>}
    </Container>
  );
};

export default Movies;
