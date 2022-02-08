/** Missing Letters
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * fearNotLetter("abce") // "d"
 *
 */

function fearNotLetter(str) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const aSlice = a.slice(a.indexOf(str[0]), a.indexOf(str[0]) + str.length + 1);
  let strLength = str.length;

  while (strLength >= 0) {
    const index = str.length - strLength;
    if (str[index] !== aSlice[index]) {
      return aSlice[index];
    }
    strLength--;
  }
}

fearNotLetter("abce");
fearNotLetter("stvwx");
