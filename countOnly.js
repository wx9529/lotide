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

module.exports = countOnly;