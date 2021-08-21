import React from 'react';
import {Provider} from 'react-redux';
import store from './src/modules/store';

const App = () => {
  return (
    <Provider store={store}>
      <></>
    </Provider>
  );
};

export default App;
