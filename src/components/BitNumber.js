import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Tile from '../components/Tile';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});

export class BitNumber extends React.Component {
  render() {
    const {number} = this.props;
    const bits = parseInt(number, 10).toString(2).padStart(8, '0').split('');
    const tiles = bits.map(bit => <Tile bit={bit}/>);

    return (
      <View style={styles.container}>
        {tiles}
      </View>
    );
  }
}

BitNumber.propTypes = {
  number: PropTypes.number.isRequired
};

export default BitNumber;
