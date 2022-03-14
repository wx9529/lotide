const reverseStr = function(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};


const reverse = function() {
  let res = '';
  for (let i = 2; i < process.argv.length; i++) {
    res += reverseStr(process.argv[i]) + '\n';
  }
  return res;
};
console.log(reverse());