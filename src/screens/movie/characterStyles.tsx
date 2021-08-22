import styled from 'styled-components';
import {Color, Typography} from '../../modules/styles';
import Padding from '../../modules/styles/padding';
import {Text, View} from 'react-native';

type ContainerProps = {
  isLast: boolean;
};
export const Container = styled(View)<ContainerProps>`
  paddingVertical: ${Padding.m}px;
  ${props =>
    props.isLast
      ? ''
      : `
    borderBottomColor: ${Color.BorderGrey};
    borderBottomWidth: 1px;
  `}
`;

export const Name = styled(Text)`
  ${Typography.primary.m.regular}
`;

export const Gender = styled(Text)`
  ${Typography.primary.s.regular}
`;

export const SpeciesList = styled(Text)`
  ${Typography.primary.s.regular}
`;
