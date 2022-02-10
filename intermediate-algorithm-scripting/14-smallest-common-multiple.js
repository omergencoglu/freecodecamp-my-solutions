/** Smallest Common Multiple
 *
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 *
 */

function smallestCommons(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  const range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  let checker = true;
  let result;

  for (let multiplier = 1; multiplier; multiplier++) {
    result = arr[0] * arr[1] * multiplier;
    for (let i of range) {
      if (result % i !== 0) {
        checker = false;
      }
    }
    if (checker === true) {
      break;
    }
    checker = true;
  }

  return result;
}

smallestCommons([1, 5]);
