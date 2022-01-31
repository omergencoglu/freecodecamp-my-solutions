/** Find the Longest Word in a String
 *
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 *
 * findLongestWordLength("May the force be with you") should return 5.
 * findLongestWordLength("Google do a barrel roll") should return 6.
 */

function findLongestWordLength(str) {
  const arr = str.split(" ");
  const longestWord = arr.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  });

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
