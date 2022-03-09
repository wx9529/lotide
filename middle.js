const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(arr1, arr2) {
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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    let mid = 0;
    if (array.length % 2 === 0) {
      mid = array.length / 2;
      return [array[mid - 1], array[mid]];
    } else {
      //odd
      mid = Math.floor(array.length / 2);
      return [array[mid]];
    }
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
