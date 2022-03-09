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

const flatten = function (arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let o of item) {
        res.push(o);
      }
    } else {
      res.push(item);
    }
  }
  return res;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 5, [6]]), [1, 2, 5, 6]);
assertArraysEqual(
  flatten([1, 2, 3, 4, 5, 6, [1, 2, 3, 4, 5, 6]]),
  [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
);
