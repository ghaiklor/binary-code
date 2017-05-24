import Expo from 'expo';
import React from 'react';
import App from './src/App';

class BinaryCode extends React.Component {
  render() {
    return <App/>;
  }
}

Expo.registerRootComponent(BinaryCode);
