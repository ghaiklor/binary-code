import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addBitNumber} from './actions';
import BitGrid from './components/BitGrid';
import BitRuler from './components/BitRuler';
import Score from './components/Score';
import NewGame from './components/NewGame';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'black',
    paddingTop: 20
  }
});

const mapStateToProps = state => ({
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  addBitNumber: () => dispatch(addBitNumber())
});

export class App extends React.Component {
  componentDidMount() {
    this.setState({interval: this._bindInterval()});
  }

  componentWillReceiveProps(nextProps) {
    const {interval} = this.state;

    clearInterval(interval);

    if (nextProps.isPlaying) this.setState({interval: this._bindInterval()});
  }

  state = {
    interval: 0
  };

  _bindInterval() {
    const {addBitNumber} = this.props;

    return setInterval(() => addBitNumber(), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <NewGame/>
        <Score/>
        <BitGrid/>
        <BitRuler/>
      </View>
    );
  }
}

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  addBitNumber: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
