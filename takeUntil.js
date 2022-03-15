const takeUntil = function(array, callback) {
  let res = [];
  for (const item of array) {
    if (!callback(item)) {
      res.push(item);
    } else {
      return res;
    }
  }
};

module.exports = takeUntil;