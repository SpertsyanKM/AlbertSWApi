import {Movie} from '../../modules/movies/types';
import React from 'react';
import NativeTouchable from '../../components/nativeTouchable';
import {Text} from 'react-native';
import {Title, Container, Episode, Year} from './moviePreviewStyles';

type Props = {
  movie: Movie;
};
const MoviePreview: React.FC<Props> = ({movie}) => (
  <NativeTouchable>
    <Container>
      <Title>{movie.title}</Title>
      <Episode>Episode number - {movie.episodeId}</Episode>
      <Year>Released at {movie.releaseYear}</Year>
    </Container>
  </NativeTouchable>
);

export default MoviePreview;
