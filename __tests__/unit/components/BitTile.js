import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {assert} from 'chai';
import {BitTile} from '../../../src/components/BitTile';

it('Should properly render BitTile with bit 0', () => {
  const tree = renderer.create(<BitTile bit={0}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.props.style[1].backgroundColor, 'rgb(250, 150, 50)');
  assert.equal(tree.children.length, 1);
  assert.equal(tree.children[0].type, 'Text');
  assert.equal(tree.children[0].children, '0');
});

it('Should properly render BitTile with bit 1', () => {
  const tree = renderer.create(<BitTile bit={1}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.props.style[1].backgroundColor, 'rgb(170, 30, 80)');
  assert.equal(tree.children.length, 1);
  assert.equal(tree.children[0].type, 'Text');
  assert.equal(tree.children[0].children, '1');
});

it('Should properly render touchable BitTile with bit 1', () => {
  const nop = () => true;
  const tree = renderer.create(<BitTile bit={1} onPress={nop}/>).toJSON();

  assert.equal(tree.type, 'View');
  assert.equal(tree.children.length, 1);
  assert.equal(tree.children[0].type, 'View');
  assert.equal(tree.children[0].children[0].type, 'Text');
  assert.equal(tree.children[0].children[0].children, '1');
});
