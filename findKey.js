const findKey = function(objList, callback) {
  for (const obj in objList) {
    if (callback(objList[obj])) {
      return obj;
    }
  }
};

module.exports = findKey;