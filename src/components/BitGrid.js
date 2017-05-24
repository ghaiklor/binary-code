import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {pressBit} from '../actions';
import BitNumber from '../components/BitNumber';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  }
});

const mapStateToProps = state => ({
  field: state.field
});

const mapDispatchToProps = dispatch => ({
  onPress: (numberIndex, bitIndex) => dispatch(pressBit(numberIndex, bitIndex))
});

export class BitGrid extends React.Component {
  render() {
    const {field, onPress} = this.props;
    const numbers = field.map((number, i) => <BitNumber key={i} number={number} onPress={onPress.bind(this, i)}/>);

    return <View style={styles.container}>{numbers}</View>;
  }
}

BitGrid.propTypes = {
  field: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BitGrid);
