const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else {
    let mid = 0;
    if (array.length % 2 === 0) {
      mid = array.length / 2;
      return [array[mid - 1], array[mid]];
    } else {
      //odd
      mid = Math.floor(array.length / 2);
      return [array[mid]];
    }
  }
};

module.exports = middle;
