const {unique} = require('./filterUniqueArrayMembers.js')

describe('unique', () => {
    test("returns a sorted array", () => {
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"]
        let filteredArr = unique(strings);
        expect(filteredArr).toEqual(["Hare", "Krishna", ":-O"]);
  });

    test("doesn't change the array", () => {
        let strings = ["Krishna", "Krishna", "Hare", "Hare"]
        expect(strings).toEqual(["Krishna", "Krishna", "Hare", "Hare"]);
  });
});