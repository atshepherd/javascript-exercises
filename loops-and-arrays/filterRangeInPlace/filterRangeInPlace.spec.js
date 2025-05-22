const {filterRangeInPlace} = require('./filterRangeInPlace')

describe('filterRange', () => {
  test("returns the filtered values", () => {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr,2,5);
    expect(filterRange(arr, 2, 5)).toEqual(filtered, [5,3]);
  });
  test("doesn't change the array", () => {
    let arr = [5, 3, 8, 1];
    expect(arr).toEqual(arr, [5,3,8,1]);
  });
});