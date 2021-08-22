import styled from 'styled-components';
import {TextInput} from 'react-native';
import {Color, Typography} from '../../modules/styles';
import Padding from '../../modules/styles/padding';

export const StyledInput = styled(TextInput)`
  ${Typography.primary.m.regular}
  height: 40px;
  backgroundColor: white;
  paddingHorizontal: ${Padding.m}px;
  borderRadius: 12px;
  borderWidth: 1px;
  borderColor: ${Color.BorderGrey};
`;
