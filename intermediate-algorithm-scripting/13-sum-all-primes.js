/** Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * Prime Number
 *  - greater than 1
 *  - divisible by itself only or 1
 *  ie. [2, 3, 5, 7, 11, 13]
 *
 * sumPrimes(10) should return 17
 *
 */

function sumPrimes(num) {
  const arr = [];
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr.reduce((a, b) => a + b);
}

sumPrimes(10);
