import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {BitRuler} from '../../../src/components/BitRuler';

it('Should properly render a bit ruler', () => {
  const tree = renderer.create(<BitRuler/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 2);
  assert.equal(tree.children[0].children.length, 8);
  assert.equal(tree.children[1].children.length, 1);
  assert.equal(tree.children[0].children[0].children[0].children, '128');
  assert.equal(tree.children[0].children[1].children[0].children, '64');
  assert.equal(tree.children[0].children[2].children[0].children, '32');
  assert.equal(tree.children[0].children[3].children[0].children, '16');
  assert.equal(tree.children[0].children[4].children[0].children, '8');
  assert.equal(tree.children[0].children[5].children[0].children, '4');
  assert.equal(tree.children[0].children[6].children[0].children, '2');
  assert.equal(tree.children[0].children[7].children[0].children, '1');
  assert.equal(tree.children[1].children[0].children, '255');
});
