import React from 'react';
import {StyleSheet, View} from 'react-native';
import BitGrid from "./components/BitGrid";

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
        <BitGrid/>
      </View>
    );
  }
}

export default App;
