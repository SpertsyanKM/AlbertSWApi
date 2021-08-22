import React from 'react';
import {isIOS} from '../../utils';
import {TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {Color} from '../../modules/styles';

type Props = {
  onPress?: () => void;
  children: React.ReactNode;
};
const NativeTouchable: React.FC<Props> = ({onPress, children}) => {
  const content = <View>{children}</View>;
  return isIOS() ? (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(Color.RippleGrey, false)}>
      {content}
    </TouchableNativeFeedback>
  );
};

export default NativeTouchable;
