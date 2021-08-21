import React from 'react';
import {Provider} from 'react-redux';
import store from './src/modules/store';
import AppContainer from './src/modules/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
