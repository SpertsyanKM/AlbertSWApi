import React from 'react';
import {Container} from './loaderStyles';
import {ActivityIndicator} from 'react-native';
import {Color} from '../../modules/styles';

type Props = {
  root?: boolean;
};

const Loader: React.FC<Props> = ({root = false}) => {
  return (
    <Container root={root}>
      <ActivityIndicator animating color={Color.Primary} size="large" />
    </Container>
  );
};

export default Loader;
