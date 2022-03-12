//Brute Force
function maxProfit(arr) {
  let maxProfit = arr[1] - arr[0];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > maxProfit) {
        maxProfit = arr[j] - arr[i];
      }
    }
    res.push(maxProfit);
  }
  return res.sort((a, b) => {
    return a - b;
  })[arr.length - 1];
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
