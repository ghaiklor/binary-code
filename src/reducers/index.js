import * as TYPES from '../actions/types';

const initialState = {
  score: 0,
  field: [],
  numbersToComplete: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.PRESS_BIT: {
      const field = state.field.slice(0);
      const numbersToComplete = state.numbersToComplete.slice(0);
      const {numberIndex, bitIndex} = action;
      const number = field[numberIndex];
      const binaryArray = number.toString(2).padStart(8, '0').split('').map(Number);
      const currentBit = binaryArray[bitIndex];

      binaryArray[bitIndex] = currentBit === 0 ? 1 : 0;

      field[numberIndex] = parseInt(binaryArray.join(''), 2);

      const newField = field.filter(number => numbersToComplete.indexOf(number) !== -1);
      const newNumbersToComplete = numbersToComplete.filter(number => field.indexOf(number) !== -1);

      return {...state, field: newField, numbersToComplete: newNumbersToComplete};
    }

    case TYPES.ADD_BIT_NUMBER: {
      const randomBitNumber = Math.floor(Math.random() * 255);
      const randomCompleteNumber = Math.floor(Math.random() * 255);
      const field = [...state.field, randomBitNumber];
      const numbersToComplete = [...state.numbersToComplete, randomCompleteNumber];

      return {...state, field, numbersToComplete};
    }

    default: {
      return state;
    }
  }
}
