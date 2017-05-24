import React from 'react';
import {View, Text} from 'react-native';
import Tile from './components/Tile';

export class App extends React.Component {
  render() {
    return (
      <View>
        <Tile bit={0}/>
        <Tile bit={1}/>
      </View>
    );
  }
}

export default App;
