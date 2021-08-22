import React from 'react';
import {Movie} from '../../modules/movies/types';
import {NavigationProp} from '../../modules/navigation';
import {Container} from './movieStyles';
import Loader from '../../components/loader';
import {Text} from 'react-native';

type NavigationParams = {
  movie: Movie;
};
type Props = NavigationProp<NavigationParams>;

const MovieScreen: React.FC<Props> = ({navigation}) => {
  const movie = navigation?.state?.params?.movie;
  return (
    <Container>
      {!movie && <Loader />}
      {movie && <Text>{movie.title}</Text>}
    </Container>
  );
};

export default MovieScreen;
