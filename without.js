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
const assertArraysEqual = function (arr1, arr2) {
  let flag = "";
  let emoj = "";
  let compare = "";

  if (eqArrays(arr1, arr2)) {
    flag = "Passed";
    emoj = "✅✅✅";
    compare = "===";
  } else {
    flag = "Failed";
    emoj = "🛑🛑🛑";
    compare = "!==";
  }
  console.log(`${emoj} Assertion ${flag}: [${arr1}] ${compare} [${arr2}]`);
};

const without = function (source, remove) {
  return source.filter((item) => !remove.includes(item));
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(
  without(["Tim", "Frank", "Tony", "Xin", "Stephen"], ["Xin", "Stephen"]),
  ["Tim", "Frank", "Tony"]
);
assertArraysEqual(without([1, 2, 3, 4, 5], [3, 2]), [1, 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], [3, 2, 1, 4, 5]), []);
assertArraysEqual(without([], []), []);
