/** Falsy Bouncer
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are:
 * false, null, 0, "", undefined, and NaN
 *
 * bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]
 */

function bouncer(arr) {
  return arr.filter((item) => item);
}

bouncer([7, "ate", "", false, 9]);
