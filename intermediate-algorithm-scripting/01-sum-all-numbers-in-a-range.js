/** Sum All Numbers in a Range
 *
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 *
 * sumAll([1, 4]) should return 10
 * sumAll([4, 1]) should return 10
 *
 */

function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let a = 0;
  for (let i = sortedArr[1]; i >= sortedArr[0]; i--) {
    a += i;
  }
  return a;
}

sumAll([1, 4]);
