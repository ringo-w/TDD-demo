const uniqueChar = require("../lib/uniqueChar.js");

describe("unique", () => {
  // Inner describe 'context'
  describe("when there is no value in the string", () => {
    // Test
    it("should return undefined", () => {
      // Assertion
      expect(uniqueChar("")).toEqual(undefined);
    });
  });

  // Inner describe 'context'
  describe("when string is passed", () => {
    // Test
    it("should return first unique character", () => {
      // Assertion
      expect(uniqueChar("ootat")).toEqual("a");
    });
  });

  // Inner describe 'context'
  describe("when there is no unique character", () => {
    // Test
    it("should return undefined", () => {
      // Assertion
      expect(uniqueChar("qqqqqqqqqqqq")).toEqual(undefined);
    });
  });
});
