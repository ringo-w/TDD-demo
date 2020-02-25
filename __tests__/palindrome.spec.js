const palindrome = require("../lib/palindrome.js");

describe("palindrome", () => {
  // Inner describe 'context'
  describe("when palindrome is odd", () => {
    // Test
    it("should return true", () => {
      // Assertion
      expect(palindrome("mom")).toBe(true);
      expect(palindrome("racecar")).toBe(true);
    });
  });
  describe("when palindrome is even", () => {
    // Test
    it("should return true", () => {
      // Assertion
      expect(palindrome("abba")).toBe(true);
    });
  });
  describe("when palindrome is capitalized", () => {
    // Test
    it("should ignore capitalized letters", () => {
      // Assertion
      expect(palindrome("MOM")).toBe(true);
      expect(palindrome("ABBA")).toBe(true);
      expect(palindrome("TWO")).toBe(false);
    });
  });
  describe("when palindrome has space in between", () => {
    // Test
    it("should ignore white spaces in between", () => {
      // Assertion
      expect(palindrome("A b b a")).toBe(true);
      expect(palindrome("t w o ")).toBe(false);
    });
  });
  describe("when palindrome is null", () => {
    // Test
    it("should throw error", () => {
      // Assertion
      expect(() => {
        palindrome(null);
      }).toThrow();
    });
  });
  describe("when palindrome takes an Infinity", () => {
    // Test
    it("should throw an error", () => {
      // Assertion
      expect(() => {
        palindrome(Infinity);
      }).toThrow();
    });
  });
});
