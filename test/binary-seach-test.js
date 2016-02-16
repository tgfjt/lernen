var assert = require('power-assert');

var binSearch = require('../binary-search/binary-search');

describe('binSearch find Index', function () {
  it('with number[]', function () {
      assert.deepEqual(binSearch([1, 3, 6, 8, 12, 14, 15, 20, 142], 14), 5);
  });

  it('with string[]', function () {
      assert.deepEqual(binSearch(['a','b','c','d','e','f','g','h','i','j'], 'i'), 8);
  });

  it('with original comparator', function () {
      var result = binSearch(
        [
          {id: 101, name: 'anton'},
          {id: 102, name: 'bob'},
          {id: 103, name: 'carol'},
          {id: 104, name: 'dean'},
          {id: 105, name: 'el'},
          {id: 106, name: 'fuh'},
          {id: 107, name: 'guitar'},
          {id: 108, name: 'hundred'},
          {id: 109, name: 'ion'},
          {id: 110, name: 'jon'}
        ],
        'ion',
        function(a, b) {
          return a.name >= b;
        }
      );

      assert.deepEqual(result, 1);
  });
});
