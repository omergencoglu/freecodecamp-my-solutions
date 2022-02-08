/** Sorted Union
 *
 * two or more arrays and
 * returns a new array of unique values in the order of the original provided arrays.
 *
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 *
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
 *
 */

function uniteUnique(...arr) {
  const result = [];
  for (let i of arr) {
    for (let a of i) {
      if (!result.includes(a)) {
        result.push(a);
      }
    }
  }

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
