/** Confirm the Ending
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But we would like you to use one of the JavaScript `substring` methods instead.
 *
 * confirmEnding("Connor", "n") should return false.
 * confirmEnding("Open sesame", "pen") should return false.
 *
 */

function confirmEnding(str, target) {
  const len = target.length;
  const ends = str.slice(str.length - len);
  return ends === target;
}

confirmEnding("Bastian", "n");
