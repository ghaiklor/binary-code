import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  text: {
    borderRightColor: 'white',
    borderRightWidth: 5,
    color: 'white',
    fontSize: 20
  }
});

export class BitRuler extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>128</Text>
        <Text style={styles.text}>64</Text>
        <Text style={styles.text}>32</Text>
        <Text style={styles.text}>16</Text>
        <Text style={styles.text}>8</Text>
        <Text style={styles.text}>4</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>1</Text>
      </View>
    );
  }
}

export default BitRuler;
