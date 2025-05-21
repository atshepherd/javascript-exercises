const {filterRange} = require('./filterRange')

describe('filterRange', () => {
  test("returns the filtered values", () => {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr,1,4);
    expect(filterRange(arr, 1, 4)).toEqual(filtered, [3,1]);
  });
  test("doesn't change the array", () => {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr,1,4);
    expect(arr).toEqual(arr, [5,3,8,1]);
  });
});