// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 33);
