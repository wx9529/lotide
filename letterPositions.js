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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log("test");
console.log(letterPositions("lighthouse in the house"));
