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

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);