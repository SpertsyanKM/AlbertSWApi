import {Movie} from '../../modules/movies/types';
import React from 'react';
import NativeTouchable from '../../components/nativeTouchable';
import {Title, Container, Episode, Year} from './moviePreviewStyles';

type Props = {
  movie: Movie;
  onPress: (movie: Movie) => void;
};
const MoviePreview: React.FC<Props> = ({movie, onPress}) => (
  <NativeTouchable onPress={() => onPress(movie)}>
    <Container>
      <Title>{movie.title}</Title>
      <Episode>Episode number - {movie.episodeId}</Episode>
      <Year>Released at {movie.releaseYear}</Year>
    </Container>
  </NativeTouchable>
);

export default MoviePreview;
