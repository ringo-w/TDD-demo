const comp = require("../lib/string-compression.js");

describe("comp", () => {
  // Inner describe 'context'
  describe("when string is compressed and counted", () => {
    // Test
    it("should return a string followed by its count", () => {
      // Assertion
      expect(comp("aaabb")).toEqual("a3b2");
    });
  });
});
// dummy tests
