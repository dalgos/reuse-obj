import chai from 'chai';
import reuseObj from '../src/index';

const assert = chai.assert;

suite('reuseObj', () => {

  test('get clone of base object', () => {
    const localState = reuseObj({ count: 1 });
    assert.deepEqual(localState.clone(), { count: 1 });
  });

  test('update properties of base object', () => {
    const localState = reuseObj({ count: 1 });
    assert.deepEqual(localState.update({ count: 2, name: 'rom' }), { count: 2 });
  });

});
