const cardNo = "79927398713";

const addCheckDigit = (n) => {
  const num = n.split("");
  let total = 0;
  let checkDgit = 0;
  for (let i = num.length - 1; i > 0; i -= 2) {
    num[i] = String(num[i] * 2);
    if (num[i].length > 1) {
      num[i] = num[i][0] + num[i][1];
    }
  }
  num.forEach((n) => {
    if (n.length > 1) {
      total += parseInt(n[0]) + parseInt(n[1]);
    } else {
      total += parseInt(n);
    }
  });
  checkDgit = (10 - (total % 10)) % 10;
  return String(n + checkDgit);
};

function check(num) {
  return addCheckDigit(num.slice(0, num.length - 1)) == num ? true : false;
}

console.log(check("49927398716"));
