const eqObjects = require('./eqObjects')

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

module.exports = assertObjectsEqual