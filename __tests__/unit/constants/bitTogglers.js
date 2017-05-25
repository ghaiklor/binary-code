import {assert} from 'chai';
import BIT_TOGGLERS from '../../../src/constants/bitTogglers';

it('Should properly export bitwise togglers', () => {
  assert.deepEqual(BIT_TOGGLERS, [
    0b10000000,
    0b01000000,
    0b00100000,
    0b00010000,
    0b00001000,
    0b00000100,
    0b00000010,
    0b00000001
  ]);
});
