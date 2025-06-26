const {copySorted} = require('./copySorted.js')

describe('copySorted', () => {
    test("returns a sorted array", () => {
        let arr = ["HTML", "JavaScript", "CSS"];
        let filteredArr = copySorted(arr);
        expect(filteredArr).toEqual(["CSS", "HTML", "JavaScript"]);
  });

    test("doesn't change the array", () => {
        let arr = ["HTML", "JavaScript", "CSS"];
        expect(arr).toEqual(["HTML", "JavaScript", "CSS"]);
  });
});