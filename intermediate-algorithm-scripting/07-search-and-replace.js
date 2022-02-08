/** Search and Replace
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Preserve the case of the first character in the original word when you are replacing it
 *
 * myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"
 *
 */

function myReplace(str, before, after) {
  const beforeIndex = str.indexOf(before);

  if (str[beforeIndex][0] === str[beforeIndex].toUpperCase()[0]) {
    str = str.replace(before, after.toUpperCase()[0] + after.slice(1));
  } else {
    str = str.replace(before, after.toLowerCase());
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
