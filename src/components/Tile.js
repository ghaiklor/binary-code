import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10
  },
  bitL: {
    backgroundColor: 'rgb(250, 150, 50)'
  },
  bitH: {
    backgroundColor: 'rgb(170, 30, 80)'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export class Tile extends React.Component {
  render() {
    const {bit} = this.props;
    const isL = bit === 0;

    return (
      <View style={[styles.container, isL ? styles.bitL : styles.bitH]}>
        <Text style={styles.text}>{bit}</Text>
      </View>
    );
  }
}

Tile.propTypes = {
  bit: PropTypes.oneOf([0, 1]).isRequired
};

export default Tile;
