/** Slice and Splice
 *
 * You are given two arrays and an index.
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 * Return the resulting array.
 * The input arrays should remain the same after the function runs.
 *
 * frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
 * frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]
 *
  frankenSplice(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2
  ); should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
 *
 */

function frankenSplice(arr1, arr2, n) {
  const start = arr2.slice(0, n);
  const end = arr2.slice(n);

  return [...start, ...arr1, ...end];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
