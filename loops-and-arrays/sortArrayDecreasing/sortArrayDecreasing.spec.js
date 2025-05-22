const {sortArrayDecreasing} = require('./sortArrayDecreasing.js')

describe('sortArrayDecreasing', () => {
  test("sorts the array in decreasing order", () => {
    let arr = [5, 2, 1, -10, 8];
    let filteredArr = sortArrayDecreasing(arr);
    expect(filteredArr).toEqual([8, 5, 2, 1, -10]);
  });
});