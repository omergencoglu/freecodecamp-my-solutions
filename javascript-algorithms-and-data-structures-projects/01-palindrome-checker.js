/** Palindrome Checker
 * Return true if the given string is a palindrome. Otherwise, return false.
 */

function palindrome(str) {
  const filteredStr = str
    .toLowerCase()
    .match(/[a-z0-9]/g)
    .join("");

  return filteredStr === filteredStr.split("").reverse().join("");
}

palindrome("eye");
palindrome("not a palindrome");
