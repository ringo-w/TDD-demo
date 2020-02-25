// const frogJumps = require("../lib/frog-jumps.js");

// // Outer describe
// describe("frogJumps", () => {
//   // Inner describe 'context'
//   describe("when start is equal to end", () => {
//     // Test
//     it("should return 0", () => {
//       // Assertion
//       expect(frogJumps(10, 10, 5)).toEqual(0);
//       expect(frogJumps(99, 99, 2)).toEqual(0);
//     });
//   });
//   describe("when start is greater than end", () => {
//     // Test
//     it("should return 0", () => {
//       // Assertion
//       expect(frogJumps(20, 10, 3)).toEqual(0);
//       expect(frogJumps(12, 0, 1));
//     });
//   });
//   describe("when destination is exactly one jump away", () => {
//     // Test
//     it("should return 1", () => {
//       // Assertion
//       expect(frogJumps(5, 15, 10)).toEqual(1);
//     });
//   });
//   describe("when there is null value", () => {
//     // Test
//     it("should return 0", () => {
//       // Assertion
//       expect(frogJumps(5, null, 10)).toEqual(0);
//       expect(frogJumps(null, 5, 3)).toEqual(0);
//     });
//   });
//   describe("if jumpLength is 0", () => {
//     // Test
//     it("should throw error", () => {
//       // Assertion
//       expect(() => {
//         frogJumps(5, 5, 0);
//       }).toThrow();
//     });
//   });
//   describe("when there is Infinity", () => {
//     // Test
//     it("should throw error", () => {
//       // Assertion
//       expect(() => {
//         frogJumps(Infinity, 10, 10);
//       }).toThrow();
//       expect(() => {
//         frogJumps(0, 5, Infinity);
//       }).toThrow();
//     });
//   });
// });
