const comp = require("../lib/string-compression.js");

describe("strComp", () => {
  // Inner describe 'context'
  describe("when string is split", () => {
    // Test
    it("should return an array of characters", () => {
      // Assertion
      expect(comp("aaabb"));
    });
  });
});
// dummy tests
