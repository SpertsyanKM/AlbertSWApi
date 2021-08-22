import {Character} from '../../modules/movies/types';
import React from 'react';
import {Container, Name} from './characterStyles';

type Props = {
  character: Character;
};
const CharacterView: React.FC<Props> = ({character}) => {
  return (
    <Container>
      <Name>{character.name}</Name>
    </Container>
  );
};

export default CharacterView;
