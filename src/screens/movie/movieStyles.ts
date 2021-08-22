import styled from 'styled-components';
import {SafeAreaView, ScrollView} from 'react-native';
import {Typography} from '../../modules/styles';
import Padding from '../../modules/styles/padding';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: Padding.m,
  },
})``;

export const Episode = styled.Text`
  ${Typography.primary.l.regular}
`;

export const ReleaseDate = styled.Text`
  ${Typography.primary.l.regular}
  paddingTop: ${Padding.m}px;
`;

export const CharactersHeader = styled.Text`
  ${Typography.primary.l.bold}
  paddingTop: ${Padding.l}px;
`;
