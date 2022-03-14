const eqArrays = function (arr1, arr2) {
  let output = true;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        output = output && eqArrays(arr1[i], arr2[i]);
      } else {
        if (arr1[i] !== arr2[i]) {
          output = output && false;
        }
      }
    }
    return output;
  }
};

module.exports = eqArrays