import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rulerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    borderRadius: 5,
    width: WINDOW_WIDTH / 8 - 50 / 8 - 4,
    height: 30,
    margin: 1
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  blank: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    borderRadius: 5,
    padding: 3,
    margin: 2,
    width: 50,
    height: 30
  }
});

export class BitRuler extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rulerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>128</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>64</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>32</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>16</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>1</Text>
          </View>
        </View>
        <View style={styles.blank}>
          <Text style={styles.text}>255</Text>
        </View>
      </View>
    );
  }
}

export default BitRuler;
