import styled from 'styled-components';
import {Typography} from '../../modules/styles';
import Padding from '../../modules/styles/padding';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../components/input';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const SearchLine = styled(Input)``;

export const ErrorMessage = styled(Text)`
  ${Typography.primary.m.regular}
  padding: ${Padding.m}px;
`;
