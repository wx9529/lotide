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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        return eqArrays(object1[item], object2[item]);
      } else if (
        !Array.isArray(object1[item]) &&
        object1[item] instanceof Object &&
        object2[item] instanceof Object &&
        !Array.isArray(object2[item])
      ) {
        return eqObjects(object1[item], object2[item]);
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(
  eqObjects(
    { a: { y: 0, z: 1 }, b: 2, c: { x: { m: { r: { ff: { k: 0 } } } } } },
    { a: { y: 0, z: 1 }, b: 2, c: { x: { m: { r: { ff: { k: 0 } } } } } }
  ),
  true
); // => false
