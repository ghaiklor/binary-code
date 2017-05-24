import React from 'react';
import {View} from 'react-native';
import BitNumber from '../components/BitNumber';

export class BitGrid extends React.Component {
  componentDidMount() {
    setTimeout(this.scheduleNextNumber.bind(this), 4000);
  }

  onPress(numberIndex, bitIndex) {
    console.log(numberIndex);
    console.log(bitIndex);
  }

  scheduleNextNumber() {
    const {field} = this.state;

    field.push(Math.floor(Math.random() * 255));

    this.setState({field});
  }

  state = {
    field: [Math.floor(Math.random() * 255)]
  };

  render() {
    const {field} = this.state;
    const numbers = field.map((number, i) => <BitNumber number={number} onPress={this.onPress.bind(this, i)}/>);

    return (
      <View>
        {numbers}
      </View>
    );
  }
}

export default BitGrid;
