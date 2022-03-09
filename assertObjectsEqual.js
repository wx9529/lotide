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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      if (Array.isArray(object1[item])) {
        return eqArrays(object1[item], object2[item]);
      }
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let flag = "";
  let emoj = "";
  let compare = "";
  if (eqObjects(actual, expected)) {
    flag = "Passed";
    emoj = "✅✅✅";
    compare = "===";
  } else {
    flag = "Failed";
    emoj = "🛑🛑🛑";
    compare = "!==";
  }
  console.log(
    `${emoj} Assertion ${flag}: [${inspect(actual)}] ${compare} [${inspect(
      expected
    )}]`
  );
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", c: "2" }, { b: "2", a: "1" });
