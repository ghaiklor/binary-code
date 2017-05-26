import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {NewGame} from '../../../src/components/NewGame';

it('Should properly render new game button', () => {
  const nop = () => true;
  const tree = renderer.create(<NewGame onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children[0].type, 'View');
  assert.equal(tree.children[0].children[0].type, 'Text');
  assert.equal(tree.children[0].children[0].children, 'NEW GAME');
});
