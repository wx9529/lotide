const flatten = function (arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let o of item) {
        res.push(o);
      }
    } else {
      res.push(item);
    }
  }
  return res;
};

module.exports = flatten;