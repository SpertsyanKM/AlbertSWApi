import React from 'react';
import {StyledInput} from './inputStyles';

type Props = {
  value: string;
  onChange: (text: string) => void;
};
const Input: React.FC<Props> = ({value, onChange}) => {
  return (
    <StyledInput
      value={value}
      onChange={event => onChange(event.nativeEvent.text)}
    />
  );
};

export default Input;
