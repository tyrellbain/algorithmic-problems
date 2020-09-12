var assert = require("assert");
const twoSum = require("./solution-2-object/index.js");
describe("twoSum", function () {
  it("given [2, 7, 11, 15] and 9 it function should return [0, 1]", () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
  it("given [3, 2, 4] and 6 it function should return [1, 2]", () => {
    assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
  it("given [3, 3] and 6 it function should return [0, 1]", () => {
    assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
  });
});
