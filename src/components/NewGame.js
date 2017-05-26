import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {startGame} from '../actions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#555555'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(startGame())
});

export class NewGame extends React.Component {
  render() {
    const {onPress} = this.props;
    const text = <Text style={styles.text}>NEW GAME</Text>;
    const view = <View style={styles.container}>{text}</View>;

    return <TouchableOpacity onPress={onPress}>{view}</TouchableOpacity>;
  }
}

NewGame.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(NewGame);
