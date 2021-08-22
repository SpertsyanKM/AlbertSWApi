import {Character, Species} from '../../modules/movies/types';
import React, {useEffect, useState} from 'react';
import {Container, Gender, Name, SpeciesList} from './characterStyles';
import MoviesService from '../../modules/movies';

type Props = {
  character: Character;
  isLast?: boolean;
};
const CharacterView: React.FC<Props> = ({character, isLast = false}) => {
  const [species, setSpecies] = useState<Species[]>([]);
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true);

  useEffect(() => {
    MoviesService.fetchSpecies(character.species)
      .then(loadedSpecies => setSpecies(loadedSpecies))
      .finally(() => setIsSpeciesLoading(false));
  }, [character, setIsSpeciesLoading]);

  const speciesValue = isSpeciesLoading
    ? 'loading...'
    : species.map(item => item.name).join(', ');
  return (
    <Container isLast={isLast}>
      <Name>{character.name}</Name>
      <Gender>Gender: {character.gender}</Gender>
      <SpeciesList>Species: {speciesValue}</SpeciesList>
    </Container>
  );
};

export default CharacterView;
