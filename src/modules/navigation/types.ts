import {NavigationScreenProp, NavigationState} from 'react-navigation';

export type NavigationProp<T> = {
  navigation: NavigationScreenProp<NavigationState, T>;
};
