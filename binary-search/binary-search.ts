namespace BinarySearch {

  const search = (len: number, comparator: (i: number) => boolean): number => {
    let first = 0;
    let last = len - 1;
    let middle = 0;

    while (first < last) {
      middle = first + Math.floor((last - first) / 2);

      if (!comparator(middle)) {
        first = middle + 1;
      } else {
        last = middle;
      }
    }

    return first;
  }

  const basicSearch = <T> (arr: T[], value: T) => {
    return search(arr.length, (i: number) => {
      return arr[i] >= value;
    });
  }

  const objSearch = (arr: any[], value: any, comparator: (a, b) => boolean) => {
    return search(arr.length, (i: number) => {
      return comparator(arr[i], value);
    });
  }

  export const findIndex = (arr: any[], val: any, comparator?: (a, b) => boolean): number => {
    if (typeof arr[0] != 'number' && typeof arr[0] != 'string') {
      return objSearch(arr, val, comparator);
    } else {
      return basicSearch(arr, val);
    }
  }

}


// Usage

BinarySearch.findIndex([1, 3, 6, 8, 12, 14, 15, 20, 142], 14);
// 5
BinarySearch.findIndex(['a','b','c','d','e','f','g','h','i','j'], 'i');
// 8
BinarySearch.findIndex(['a','b','c','d','e','f','g','h','i','j'], 'b');
// 1
BinarySearch.findIndex(
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
// 8
