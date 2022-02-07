/** Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
 *
 */

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

/** Regex
 *
 * I copy the regex from here:
 * https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-spinal-tap-case/16078
 *
 *  - [\s] to match white space chars
 *  -  [_] to match underscore characters
 *  - [(?=[A-Z])] to match uppercase chars
 */
