/** Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * titleCase("sHoRt AnD sToUt") should return Short And Stout
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout
 */

function titleCase(str) {
  const arr = str.split(" ");
  const newArr = [];
  for (let i of arr) {
    newArr.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
  }
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");
