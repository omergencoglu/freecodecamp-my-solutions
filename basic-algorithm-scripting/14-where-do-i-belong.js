/** Where do I Belong
 *
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 * getIndexToIns([10, 20, 30, 40, 50], 35) should return 3
 * getIndexToIns([40, 60], 50) should return 1
 * getIndexToIns([], 1) should return 0
 *
 */

function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
