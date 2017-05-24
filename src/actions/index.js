import * as TYPES from '../actions/types';

/**
 * Creates an action for processing a pressed bit in a bit numbers grid.
 *
 * @param {Number} numberIndex Index of a number in a grid
 * @param {Number} bitIndex Index of a concrete bit in a number
 * @returns {{type: String, numberIndex: Number, bitIndex: Number}}
 */
export function pressBit(numberIndex, bitIndex) {
  return {type: TYPES.PRESS_BIT, numberIndex, bitIndex};
}

/**
 * Creates an action for adding new bit numbers in the grid.
 *
 * @returns {{type: String}}
 */
export function addBitNumber() {
  return {type: TYPES.ADD_BIT_NUMBER};
}
