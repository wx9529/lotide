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

const countOnly = function (allItems, itemsToCount) {
  let res = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (item in res) {
        res[item] += 1;
      } else {
        res[item] = 1;
      }
    }
  }
  return res;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
