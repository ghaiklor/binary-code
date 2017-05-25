import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import BitTile from '../components/BitTile';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4
  }
});

export class BitNumber extends React.Component {
  render() {
    const {number, onPress} = this.props;
    const bits = number.toString(2).padStart(8, '0').split('').map(Number);
    const tiles = bits.map((bit, i) => <BitTile key={i} bit={bit} onPress={() => onPress(i)}/>);

    return <View style={styles.container}>{tiles}</View>;
  }
}

BitNumber.propTypes = {
  number: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};

export default BitNumber;
