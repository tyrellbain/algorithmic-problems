var assert = require("assert");
const countAndSay = require("./solution-3-while-and-for/index");
describe("Count And Say", function () {
  it("given 3 it function should return '21'", () => {
    assert.equal(countAndSay(3), "21");
  });
  it("given 5 it function should return '111221'", () => {
    assert.equal(countAndSay(5), "111221");
  });
  it("given 10 it function should return '13211311123113112211'", () => {
    assert.equal(countAndSay(10), "13211311123113112211");
  });
});
