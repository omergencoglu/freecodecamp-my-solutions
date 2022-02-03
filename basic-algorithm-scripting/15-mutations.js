/** Mutations
 *
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 *
 * mutation(["Mary", "Army"]) should return true
 * mutation(["Mary", "Aarmy"]) should return true
 * mutation(["floor", "for"]) should return true
 * mutation(["voodoo", "no"]) should return false
 *
 */

function mutation(arr) {
  const str1 = arr[0].toLowerCase().split("");
  const str2 = arr[1].toLowerCase().split("");
  for (let i of str2) {
    if (str1.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
