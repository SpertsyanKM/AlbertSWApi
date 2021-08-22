import React, {useEffect, useState} from 'react';
import {Character, Movie} from '../../modules/movies/types';
import {NavigationProp} from '../../modules/navigation';
import {
  Container,
  Content,
  Episode,
  ReleaseDate,
  CharactersHeader,
  ErrorMessage,
  AdditionalText,
} from './movieStyles';
import Loader from '../../components/loader';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import MoviesService from '../../modules/movies';
import CharacterView from './character';
import {SHOWN_CHARACTERS_COUNT} from './constants';

type NavigationParams = {
  movie: Movie;
};
type Props = NavigationProp<NavigationParams>;

const MovieScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {
  const movie = navigation?.state?.params?.movie;
  const [areCharactersLoading, setAreCharactersLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersLoadingFailed, setCharactersLoadingFailed] = useState(false);

  useEffect(() => {
    if (!movie) {
      return;
    }

    MoviesService.fetchCharacters(
      movie.characters.slice(0, SHOWN_CHARACTERS_COUNT),
    )
      .then(loadedCharacters => {
        setCharacters(loadedCharacters);
        setCharactersLoadingFailed(false);
      })
      .catch(_ => setCharactersLoadingFailed(true))
      .finally(() => setAreCharactersLoading(false));
  }, [
    movie,
    setAreCharactersLoading,
    setCharacters,
    setCharactersLoadingFailed,
  ]);

  const hiddenCharactersCount =
    movie?.characters?.length - SHOWN_CHARACTERS_COUNT;

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
          {areCharactersLoading && <Loader />}
          {!areCharactersLoading && !charactersLoadingFailed && (
            <>
              {characters.map((character, index) => (
                <CharacterView
                  character={character}
                  isLast={index + 1 === characters.length}
                  key={character.url}
                />
              ))}
              {hiddenCharactersCount > 0 && (
                <AdditionalText>
                  and {hiddenCharactersCount} more.
                </AdditionalText>
              )}
            </>
          )}
          {charactersLoadingFailed && (
            <ErrorMessage>Failed to load characters</ErrorMessage>
          )}
        </Content>
      )}
    </Container>
  );
};

MovieScreen.navigationOptions = ({navigation}) => ({
  title: navigation?.state?.params?.movie?.title ?? 'Movie',
});

export default MovieScreen;
