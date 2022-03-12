// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let flag = "";
  let emoj = "";
  let compare = "";
  if (!isNaN(actual) && !isNaN(expected)) {
    if (actual === expected) {
      flag = "Passed";
      emoj = "✅✅✅";
      compare = "===";
    } else {
      flag = "Failed";
      emoj = "🛑🛑🛑";
      compare = "!==";
    }
  } else {
    if (!actual.localeCompare(expected)) {
      flag = "Passed";
      emoj = "✅✅✅";
      compare = "===";
    } else {
      flag = "Failed";
      emoj = "🛑🛑🛑";
      compare = "!==";
    }
  }
  console.log(
    `${emoj} Assertion ${flag}: [${actual}] ${compare} [${expected}]`
  );
};

const eqArrays = function (arr1, arr2) {
  let output = true;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        output = output && eqArrays(arr1[i], arr2[i]);
      } else {
        if (arr1[i] !== arr2[i]) {
          output = output && false;
        }
      }
    }
    return output;
  }
};

console.log(
  eqArrays(
    [
      [2, 3],
      [4, 5, 6],
    ],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays(["s", "f", "q"], ["s", "f", "q"]), true);
assertEqual(eqArrays(["s", "q"], ["s", "f", "q"]), false);

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ) // => false
);
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
