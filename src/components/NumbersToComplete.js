import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  numbersToComplete: state.numbersToComplete
});

export class NumbersToComplete extends React.Component {
  render() {
    const {numbersToComplete} = this.props;
    const numbers = numbersToComplete.map((number, i) => <Text key={i} style={styles.text}>{number} | </Text>);

    return <View style={styles.container}>{numbers}</View>;
  }
}

NumbersToComplete.propTypes = {
  numbersToComplete: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(NumbersToComplete);
