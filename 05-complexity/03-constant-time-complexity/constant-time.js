const { log, error, time, timeEnd } = require('console');
/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

// Example 1
function constantTime1(array) {
  return array[0];
}

let array = [1, 2, 3, 4, 5];

time('constantTime1');
log(constantTime1(array));
timeEnd('constantTime1');