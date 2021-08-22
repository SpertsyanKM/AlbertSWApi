import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screens from './screens';
import Movies from '../../screens/movies';
import MovieScreen from '../../screens/movie';

const AppNavigator = createStackNavigator({
  [Screens.Movies]: {
    screen: Movies,
  },
  [Screens.Movie]: {
    screen: MovieScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
