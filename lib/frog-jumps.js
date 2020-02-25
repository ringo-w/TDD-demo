// function frogJumps(start, end, jumpLength) {
//   if (start === null || end === null || jumpLength === null) return 0;
//   if (start === Infinity || end === Infinity || jumpLength === Infinity) {
//     throw new Error("Infinity throw error");
//   }
//   if (jumpLength === 0) {
//     throw new Error("jumpLength can't be zero");
//   }
//   if (start >= end) return 0;
//   else {
//     const distance = end - start;
//     return Math.ceil(distance / jumpLength);
//   }
// }

// module.exports = frogJumps;
