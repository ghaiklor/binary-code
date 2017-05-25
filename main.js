import Expo from 'expo';
import React from 'react';
import {compose, applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import App from './src/App';

const store = createStore(reducer, undefined, compose(applyMiddleware(thunk)));

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
