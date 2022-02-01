/** Truncate a String
 *
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
 * truncateString("A-", 1) should return "A...".
 *
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  ); should return "A-tisket a-tasket A green and yellow basket".
 *
 */

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
