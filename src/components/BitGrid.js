import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {pressBit} from '../actions';
import BitNumber from '../components/BitNumber';
import BitExpect from '../components/BitExpect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  bits: state.bits,
  numbers: state.numbers
});

const mapDispatchToProps = dispatch => ({
  onPress: (numberIndex, bitIndex) => dispatch(pressBit(numberIndex, bitIndex))
});

export class BitGrid extends React.Component {
  makeRow(bitNumber, bitNumberIndex) {
    const {numbers, onPress} = this.props;
    const bitNumberTile = <BitNumber number={bitNumber} onPress={onPress.bind(this, bitNumberIndex)}/>;
    const bitExpectTile = <BitExpect number={numbers[bitNumberIndex]}/>;

    return <View key={bitNumberIndex} style={styles.rowContainer}>{bitNumberTile}{bitExpectTile}</View>;
  }

  render() {
    const {bits} = this.props;
    const rows = bits.map(this.makeRow.bind(this));

    return <View style={styles.container}>{rows.reverse()}</View>;
  }
}

BitGrid.propTypes = {
  bits: PropTypes.array.isRequired,
  numbers: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BitGrid);
