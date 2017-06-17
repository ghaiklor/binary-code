import * as TYPES from '../actions/types';
import BIT_TOGGLERS from '../constants/bitTogglers';

const initialState = {
  score: 1,
  level: 1,
  bits: [0],
  numbers: [1],
  isPlaying: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.PRESS_BIT: {
      const {numberIndex, bitIndex} = action;
      const bits = state.bits.slice(0);
      const numbers = state.numbers.slice(0);

      bits[numberIndex] ^= BIT_TOGGLERS[bitIndex];

      if (bits[numberIndex] === numbers[numberIndex]) {
        const score = state.score + 1;

        bits.splice(numberIndex, 1);
        numbers.splice(numberIndex, 1);

        return {...state, score, bits, numbers};
      }

      return {...state, bits, numbers};
    }

    case TYPES.ADD_BIT_NUMBER: {
      const {score} = state;
      const level = score % 5 === 0 ? state.level + 1 : state.level;
      const randomNumber = Math.min(Math.floor(Math.random() * Math.pow(2, level)) + 1, 255);
      const bits = [...state.bits, 0];
      const numbers = [...state.numbers, randomNumber];

      return {...state, level, bits, numbers};
    }

    case TYPES.START_GAME: {
      const score = 1;
      const level = 1;
      const bits = [];
      const numbers = [];
      const isPlaying = true;

      return {...state, score, level, bits, numbers, isPlaying};
    }

    case TYPES.GAME_OVER: {
      return {...state, bits: [], numbers: [], isPlaying: false};
    }

    default: {
      return state;
    }
  }
}
