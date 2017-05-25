import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import BitGrid from './components/BitGrid';
import BitRuler from './components/BitRuler';
import Score from './components/Score';
import NewGame from './components/NewGame';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'black',
    paddingTop: 50
  }
});

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewGame/>
        <Score/>
        <BitGrid/>
        <BitRuler/>
      </View>
    );
  }
}

App.propTypes = {
  addBitNumber: PropTypes.func
};

export default App;
