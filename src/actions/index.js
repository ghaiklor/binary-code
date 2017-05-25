import * as TYPES from '../actions/types';

/**
 * Creates an action for processing a pressed bit in a bit numbers grid.
 *
 * @param {Number} numberIndex Index of a number in a grid
 * @param {Number} bitIndex Index of a concrete bit in a number
 * @returns {{type: String, numberIndex: Number, bitIndex: Number}}
 */
export function pressBit(numberIndex, bitIndex) {
  return function (dispatch, getState) {
    dispatch({type: TYPES.PRESS_BIT, numberIndex, bitIndex});

    const {bits} = getState();

    if (bits.length === 0) return dispatch(addBitNumber());
  };
}

/**
 * Creates an action for adding new bit numbers in the grid.
 *
 * @returns {{type: String}}
 */
export function addBitNumber() {
  return function (dispatch, getState) {
    dispatch({type: TYPES.ADD_BIT_NUMBER});

    const {bits} = getState();

    if (bits.length > 8) return dispatch(gameOver());
    if (bits.length <= 8) return setTimeout(dispatch, 5000, {type: TYPES.ADD_BIT_NUMBER});
  };
}

/**
 * Creates an action for starting a new game.
 *
 * @returns {{type: String}}
 */
export function startGame() {
  return function (dispatch) {
    dispatch({type: TYPES.START_GAME});
    dispatch(addBitNumber());
  };
}

/**
 * Creates an action for game over state.
 *
 * @returns {{type: String}}
 */
export function gameOver() {
  return {type: TYPES.GAME_OVER};
}
