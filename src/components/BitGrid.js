import React from 'react';
import {StyleSheet, View} from 'react-native';
import BitNumber from '../components/BitNumber';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  }
});

export class BitGrid extends React.Component {
  componentDidMount() {
    setTimeout(this.scheduleNextNumber.bind(this), 4000);
  }

  onPress(numberIndex, bitIndex) {
    const {field} = this.state;
    const number = field[numberIndex];
    const bits = parseInt(number, 10).toString(2).padStart(8, '0').split('').map(Number);

    bits[bitIndex] = 1;

    field[numberIndex] = parseInt(bits.join(''), 10);

    this.setState({field});
  }

  scheduleNextNumber() {
    const {field} = this.state;

    field.push(Math.floor(Math.random() * 255));

    this.setState({field});

    setTimeout(this.scheduleNextNumber.bind(this), 3000);
  }

  state = {
    field: [Math.floor(Math.random() * 255)]
  };

  render() {
    const {field} = this.state;
    const numbers = field.map((number, i) => <BitNumber key={i} number={number} onPress={this.onPress.bind(this, i)}/>);

    return <View style={styles.container}>{numbers}</View>;
  }
}

export default BitGrid;
