/** Pig Latin
 *
 * Takes the first consonant(s) and move to the end and add "ay"
 * "california" --> aliforniacay
 *
 * If word beings with vowel, add "way" to the end
 * "algorithm" --> algorithmway
 *
 * If no vowel, just add "ay" to the end
 * "h"         --> hay
 */

function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = [];
  let i = str.length;
  while (i > 0) {
    if (vowels.includes(str[str.length - i])) {
      break;
    } else {
      arr.push(str[str.length - i]);
      i--;
    }
  }

  if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    return str.slice(arr.length) + arr.join("") + "ay";
  }
}

translatePigLatin("paragraphs");
translatePigLatin("glove");
