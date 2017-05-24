import Expo from 'expo';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers';
import App from './src/App';

const store = createStore(reducer);

class BinaryCode extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(BinaryCode);
