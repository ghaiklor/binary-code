import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {BitExpect} from '../../../src/components/BitExpect';

it('Should properly render BitExpect component', () => {
  const tree = renderer.create(<BitExpect number={25}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 1);
  assert.equal(tree.children[0].type, 'Text');
  assert.equal(tree.children[0].children, '25');
});
