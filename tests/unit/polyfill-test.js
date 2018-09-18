import { module, test } from 'qunit';

module('polyfull', function() {
  test('it has flatMap', (assert) => {
    const res = [1, 2].flatMap(val => [val, val]);
    assert.deepEqual(res, [1, 1, 2, 2]);
  });
})
