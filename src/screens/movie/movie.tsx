import React, {useEffect, useState} from 'react';
import {Movie} from '../../modules/movies/types';
import {NavigationProp} from '../../modules/navigation';
import {Container, Content, Episode, ReleaseDate, CharactersHeader} from './movieStyles';
import Loader from '../../components/loader';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

type NavigationParams = {
  movie: Movie;
};
type Props = NavigationProp<NavigationParams>;

const MovieScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {
  const movie = navigation?.state?.params?.movie;

  return (
    <Container>
      {!movie && <Loader />}
      {movie && (
        <Content>
          <Episode>Episode number - {movie.episodeId}</Episode>
          <ReleaseDate>
            Released at {movie.releaseDate.toLocaleDateString()}
          </ReleaseDate>
          <CharactersHeader>Characters</CharactersHeader>
        </Content>
      )}
    </Container>
  );
};

MovieScreen.navigationOptions = ({navigation}) => ({
  title: navigation?.state?.params?.movie?.title ?? 'Movie',
});

export default MovieScreen;
