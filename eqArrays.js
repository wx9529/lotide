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
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), true);
assertEqual(eqArrays(["s", "f", "q"], ["s", "f", "q"]), true);
assertEqual(eqArrays(["s", "q"], ["s", "f", "q"]), true);
