import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    padding: 8
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  score: state.score
});

export class Score extends React.Component {
  render() {
    const {score} = this.props;
    const text = <Text style={styles.text}>{score}</Text>;

    return <View style={styles.container}>{text}</View>;
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Score);
