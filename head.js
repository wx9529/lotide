const head = function (arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;
