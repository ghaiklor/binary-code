import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addBitNumber} from './actions';
import BitGrid from './components/BitGrid';
import NumbersToComplete from './components/NumbersToComplete';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'black',
    paddingTop: 50
  }
});

const mapDispatchToProps = dispatch => ({
  addBitNumber: () => dispatch(addBitNumber())
});

export class App extends React.Component {
  componentDidMount() {
    const {addBitNumber} = this.props;

    setInterval(addBitNumber, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <NumbersToComplete/>
        <BitGrid/>
      </View>
    );
  }
}

App.propTypes = {
  addBitNumber: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
