import React from 'react';
import {StyleSheet, View} from 'react-native';
import BitNumber from './components/BitNumber';
import BitRuler from './components/BitRuler';

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
        <BitNumber number={20}/>
        <BitNumber number={45}/>
        <BitNumber number={10}/>
        <BitNumber number={1}/>
        <BitRuler/>
      </View>
    );
  }
}

export default App;
