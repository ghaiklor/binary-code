import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    borderRadius: 5,
    padding: 3,
    margin: 2,
    width: 50,
    height: 30
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});

export class BitExpect extends React.Component {
  render() {
    const {number} = this.props;
    const text = <Text style={styles.text}>{number}</Text>;

    return <View style={styles.container}>{text}</View>;
  }
}

BitExpect.propTypes = {
  number: PropTypes.number.isRequired
};

export default BitExpect;
