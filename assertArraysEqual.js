const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  let flag = "";
  let emoj = "";
  let compare = "";

  if (eqArrays(arr1, arr2)) {
    flag = "Passed";
    emoj = "✅✅✅";
    compare = "===";
  }
  flag = "Failed";
  emoj = "🛑🛑🛑";
  compare = "!==";
  console.log(`${emoj} Assertion ${flag}: [${arr1}] ${compare} [${arr2}]`);
};

module.exports = assertArraysEqual;
