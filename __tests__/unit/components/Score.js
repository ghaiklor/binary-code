import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {Score} from '../../../src/components/Score';

it('Should properly render score', () => {
  const tree = renderer.create(<Score score={20}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children[0].type, 'Text');
  assert.equal(tree.children[0].children, '20');
});
