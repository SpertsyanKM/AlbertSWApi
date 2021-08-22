import React from 'react';
import {Container} from './loaderStyles';
import {ActivityIndicator} from 'react-native';
import {Color} from '../../modules/styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator animating color={Color.Primary} size="large" />
    </Container>
  );
};

export default Loader;
