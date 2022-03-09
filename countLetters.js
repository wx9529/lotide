const assertEqual = function(actual, expected) {
  let flag = "";
  let emoj = "";
  let compare = "";
  if (actual === expected) {
    flag = "Passed";
    emoj = "✅✅✅";
    compare = "===";
  } else {
    flag = "Failed";
    emoj = "🛑🛑🛑";
    compare = "!==";
  }
  console.log(
    `${emoj} Assertion ${flag}: [${actual}] ${compare} [${expected}]`
  );
};

const countLetters = function(str) {
  let res = {};
  for (const char of str) {
    if (res[char]) {
      res[char] += 1;
    } else {
      res[char] = 1;
    }
  }
  return res;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));
