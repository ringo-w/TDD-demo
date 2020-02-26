const uniqueChar = require("../lib/uniqueChar.js");

describe("unique", () => {
  // Inner describe 'context'
  describe("when string is passed", () => {
    // Test
    it("should return first unique character", () => {
      // Assertion
      expect(uniqueChar("ootat")).toEqual("a");
    });
  });
});
