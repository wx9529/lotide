const assertEqual = function(actual, expected) {
  let flag = '';
  let emoj = '';
  let compare = '';
  if (!isNaN(actual) && !isNaN(expected)) {
    if (actual === expected) {
      flag = 'Passed';
      emoj = '✅✅✅';
      compare = '===';
    } else {
      flag = 'Failed';
      emoj = '🛑🛑🛑';
      compare = '!==';
     
    }
  } else {
    if (actual.localeCompare(expected) === 0) {
      flag = 'Passed';
      emoj = '✅✅✅';
      compare = '===';
  
    } else {
      flag = 'Failed';
      emoj = '🛑🛑🛑';
      compare = '!==';
 
    }
  }
  console.log(`${emoj} Assertion ${flag}: [${actual}] ${compare} [${expected}]`);
};

const tail = function(arr) {
  return arr.slice(1);
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!