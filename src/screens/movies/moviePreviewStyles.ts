import styled from 'styled-components';
import {Color, Typography} from '../../modules/styles';
import Padding from '../../modules/styles/padding';
import {Text, View} from 'react-native';

export const Container = styled(View)`
  padding: ${Padding.m}px;
  borderBottomColor: ${Color.BorderGrey};
  borderBottomWidth: 1px;
`;

export const Title = styled(Text)`
  ${Typography.primary.l.bold}
`;

export const Episode = styled(Text)`
  ${Typography.primary.m.regular}
`;

export const Year = styled(Text)`
  ${Typography.secondary.s.regular}
  textAlign: right;
`;
