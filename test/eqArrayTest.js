const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays(["s", "f", "q"], ["s", "f", "q"]), true);
assertEqual(eqArrays(["s", "q"], ["s", "f", "q"]), false);

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

// console.log(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   ) // => false
// );
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
