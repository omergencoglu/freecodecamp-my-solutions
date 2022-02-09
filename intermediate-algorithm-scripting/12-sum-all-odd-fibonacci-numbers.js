/** Sum All Odd Fibonacci Numbers
 *
 * return the sum of all odd Fibonacci numbers that are less than or equal to num
 *
 * sumFibs(4) should return 5.
 *
 */

function sumFibs(num) {
  let newArr = [1, 1];

  while (newArr[newArr.length - 1] + newArr[newArr.length - 2] <= num) {
    newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
  }

  newArr = newArr.filter((a) => a % 2 === 1);

  return newArr.reduce((a, b) => a + b);
}

sumFibs(4);
