// 1. 5 bottles, after drinking, there are 5 empty bottles and 5 caps.
// 2. 4 empty bottles for 2 bottles, 4 caps for 1 bottle, 1 empty bottle and 1 cap left, after drinking, there are 4 empty bottles and 4 caps.
// 3. 4 empty bottles for 2 bottles, 4 caps for 1 bottle, after drinking, there are 3 empty bottles and 3 caps.
// 4. 2 empty bottles for 1 bottle, after drinking, there are 2 empty bottles and 4 caps.
// 5. 2 empty bottles for 1 bottle and 4 caps for 1 bottle, after drinking, there are 2 empty bottles and 2 caps
// 6. 2 empty bottles for 1 bottle and 1 empty bottle and 3 caps when finished.
//5+3+3
let totalCapsEarned = 0;
let totalBottlesEarned = 0;
let newbottles = 0;
let newcaps = 0;
function getbottles(bottles) {
  return Math.floor(bottles / 2);
}

function getcaps(caps) {
  return Math.floor(caps / 4);
}
function poppinBottles(pop, bottles, caps) {
  //drink
  // let newbottles = pop; //5
  // let newcaps = pop; //5

  newbottles = bottles;
  newcaps = caps;
  // console.log("start pop", pop);
  // console.log("start bottles", bottles);
  // console.log("start caps", caps);
  if (newbottles > 2 || newcaps > 4 || pop > 0) {
    totalBottlesEarned += getbottles(newbottles);
    totalCapsEarned += getcaps(newcaps);
    let totalpopget = getbottles(newbottles) + getcaps(newcaps); // 2 + 1 = 3
    // console.log("totalpopget", totalpopget);
    newbottles = newbottles % 2;
    newcaps = newcaps % 4;
    console.log(newbottles, newcaps);

    // console.log("end pop", totalpopget);
    // console.log("end bottles", newbottles);
    // console.log("end caps", newcaps);
    return (
      totalpopget +
      poppinBottles(
        totalpopget,
        totalpopget + newbottles,
        totalpopget + newcaps
      )
    );
  } else {
    return pop;
  }
}
// console.log(20 + poppinBottles(0, 20, 20));

const popCalculator = function(argv) {
  let initPop = argv / 2;
  let initBottle = initPop;
  let initCaps = initPop;
  let totalEarned = initPop + poppinBottles(0, initBottle, initCaps);
  return `TOTAL BOTTLES: ${totalEarned}\nREMAINING BOTTLES: ${newbottles}\nREMAINING CAPS: ${newcaps}\nTOTAL EARNED:\n  BOTTLES: ${totalBottlesEarned}\n  CAPS: ${totalCapsEarned}`;
};
console.log(popCalculator(40));
