import 'react-native';
import React from 'react';
import {assert} from 'chai';
import renderer from 'react-test-renderer';
import {BitNumber} from '../../../src/components/BitNumber';

it('Should properly render BitNumber with number 25', () => {
  const nop = () => true;
  const tree = renderer.create(<BitNumber number={25} onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 8);
  assert.equal(tree.children[0].children[0].children[0].children, '0');
  assert.equal(tree.children[1].children[0].children[0].children, '0');
  assert.equal(tree.children[2].children[0].children[0].children, '0');
  assert.equal(tree.children[3].children[0].children[0].children, '1');
  assert.equal(tree.children[4].children[0].children[0].children, '1');
  assert.equal(tree.children[5].children[0].children[0].children, '0');
  assert.equal(tree.children[6].children[0].children[0].children, '0');
  assert.equal(tree.children[7].children[0].children[0].children, '1');
});

it('Should properly render BitNumber with number 255', () => {
  const nop = () => true;
  const tree = renderer.create(<BitNumber number={255} onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 8);
  assert.equal(tree.children[0].children[0].children[0].children, '1');
  assert.equal(tree.children[1].children[0].children[0].children, '1');
  assert.equal(tree.children[2].children[0].children[0].children, '1');
  assert.equal(tree.children[3].children[0].children[0].children, '1');
  assert.equal(tree.children[4].children[0].children[0].children, '1');
  assert.equal(tree.children[5].children[0].children[0].children, '1');
  assert.equal(tree.children[6].children[0].children[0].children, '1');
  assert.equal(tree.children[7].children[0].children[0].children, '1');
});
