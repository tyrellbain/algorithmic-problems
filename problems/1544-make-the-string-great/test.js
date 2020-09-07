var assert = require("assert");
const makeGood = require("./index.js");
describe("Make The String Great", function () {
  it("given 'leEeetcode' the function should return 'leetcode'", () => {
    assert.equal(makeGood("leEeetcode"), "leetcode");
  });
  it("given 'abBAcC' the function should return ''", () => {
    assert.equal(makeGood("abBAcC"), "");
  });
  it("given 's' it function should return 's'", () => {
    assert.equal(makeGood("s"), "s");
  });
});
