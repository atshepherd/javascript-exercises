const {camelize} = require('./toCamelCase')

describe('toCamelCase', () => {
  test("turns background-color into backgroundColor", () => {
    expect(camelize("background-color")).toEqual("backgroundColor");
  });
  test("turns list-style-image into listStyleImage", () => {
    expect(camelize("list-style-image")).toEqual("listStyleImage");
  });
  test("turns -webkit-transition into WebkitTransition", () => {
    expect(camelize("-webkit-transition")).toEqual("WebkitTransition");
  });
});
