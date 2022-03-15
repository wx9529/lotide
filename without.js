const without = function (source, remove) {
  return source.filter((item) => !remove.includes(item));
};

module.exports = without;