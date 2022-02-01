/** Repeat a String
 *
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 *
 * repeatStringNumTimes("*", 3) should return "***"
 * repeatStringNumTimes("abc", -2) should return ""
 * repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *
 */

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);
