import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {BitGrid} from '../../../src/components/BitGrid';

it('Should properly render bit grid with two rows', () => {
  const bits = [3, 255];
  const numbers = [5, 200];
  const nop = () => true;
  const tree = renderer.create(<BitGrid bits={bits} numbers={numbers} onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
  assert.equal(tree.children[0].children[0].children[0].children[0].children[0].children[0], '1');
});
