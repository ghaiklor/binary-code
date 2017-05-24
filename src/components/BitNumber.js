import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Tile from '../components/Tile';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 8
  }
});

export class BitNumber extends React.Component {
  render() {
    const {number, onPress} = this.props;
    const bits = parseInt(number, 10).toString(2).padStart(8, '0').split('').map(Number);
    const tiles = bits.map((bit, i) => <Tile bit={bit} onPress={() => onPress(i)}/>);

    return <View style={styles.container}>{tiles}</View>;
  }
}

BitNumber.propTypes = {
  number: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};

export default BitNumber;
