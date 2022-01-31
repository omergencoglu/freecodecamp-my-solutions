/** Factorialize a Number
 *
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Only integers greater than or equal to zero will be supplied to the function.
 *
 * factorialize(5) should return 120.
 * factorialize(0) should return 1.
 */

function factorialize(num) {
  if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
