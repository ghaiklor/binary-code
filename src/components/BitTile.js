import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: WINDOW_WIDTH / 8 - 50 / 8 - 4,
    height: 50,
    margin: 1
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

export class BitTile extends React.Component {
  render() {
    const {bit, onPress} = this.props;
    const isL = bit === 0;
    const viewStyle = [styles.container, isL ? styles.bitL : styles.bitH];
    const text = <Text style={styles.text}>{bit}</Text>;
    const view = <View style={viewStyle}>{text}</View>;
    const touchableView = <TouchableOpacity onPress={onPress}>{view}</TouchableOpacity>;

    return onPress ? touchableView : view;
  }
}

BitTile.propTypes = {
  bit: PropTypes.oneOf([0, 1]).isRequired,
  onPress: PropTypes.func
};

export default BitTile;
