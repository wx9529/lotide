const eqArrays = require('./eqArrays')

const eqObjects = function (object1, object2) {
  let output = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const item in object1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        output = output && eqArrays(object1[item], object2[item]);
      } else if (
        !Array.isArray(object1[item]) &&
        object1[item] instanceof Object &&
        object2[item] instanceof Object &&
        !Array.isArray(object2[item])
      ) {
        output = output && eqObjects(object1[item], object2[item]);
      } else {
        if (object1[item] !== object2[item]) {
          output = output && false;
        }
      }
    }
    return output;
  }
};

module.exports = eqObjects;