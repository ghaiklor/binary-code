import React from 'react';
import {StyleSheet, View} from 'react-native';
import BitRuler from './components/BitRuler';
import Tile from './components/Tile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'black'
  }
});

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tile bit={0}/>
        <Tile bit={1}/>
        <BitRuler/>
      </View>
    );
  }
}

export default App;
