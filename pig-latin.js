const convertToPL = function (str) {
  let res = "";
  let first = str[0];
  res = str.slice(1) + first + "ay";
  return res;
};

const convertToPigLatin = function () {
  let res = "";
  for (let i = 2; i < process.argv.length; i++) {
    if (true) {
      console.log("s");
    }
    res += convertToPL(process.argv[i]) + " ";
  }
  if (true) {
    console.log("s");
  }
  return res;
};

console.log(convertToPigLatin());
