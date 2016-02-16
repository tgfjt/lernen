/**
 * binary search
 *
 * @see
 * - https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/
 * - https://en.wikibooks.org/wiki/Algorithm_Implementation/Search/Binary_search
 * - http://blog.livedoor.jp/dankogai/archives/50961989.html
 * - https://golang.org/src/sort/search.go
 */

function defaultComparator(a, b) {
  return a >= b;
}

function binSearch(arr, value, comparator) {
  var first = 0;
  var last = arr.length - 1;
  var middle = 0;
  comparator = comparator || defaultComparator

  while (first < last) {
    middle = first + Math.floor((last - first) / 2);

    if (!comparator(arr[middle], value)) {
      first = middle + 1;
    } else {
      last = middle;
    }
  }

  return first;
}

binSearch([1, 3, 6, 8, 12, 14, 15, 20, 142], 14);
binSearch(['a','b','c','d','e','f','g','h','i','j'], 'i');
binSearch(['a','b','c','d','e','f','g','h','i','j'], 'b');

binSearch(
  [
    {id: 101, name: 'a'},
    {id: 102, name: 'b'},
    {id: 103, name: 'c'},
    {id: 104, name: 'd'},
    {id: 105, name: 'e'},
    {id: 106, name: 'f'},
    {id: 107, name: 'g'},
    {id: 108, name: 'h'},
    {id: 109, name: 'i'},
    {id: 110, name: 'j'}
  ],
  'b',
  function(a, b) {
    return a.name >= b;
  }
);

binSearch(
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

module.exports = binSearch;
