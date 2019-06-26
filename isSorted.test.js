var isSorted = require("./isSorted");

test("is not empty", () => {
  expect(isSorted([1, 2])).toBeTruthy();
});

test("is empty", () => {
  expect(() => isSorted([])).toThrowError();
});

test("is not ordered", () => {
  expect(isSorted([2, 1, 4, 6, 3])).toBeFalsy();
});

test("is ordered", () => {
  expect(isSorted([1, 2, 3, 4])).toBeTruthy();
});
