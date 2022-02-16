/** Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  //create cipher object with keys and values matching caesars cipher
  //just creates 13 of them as this will include all the alphabetic chars
  const cipher = {};
  for (let i = 0; i < 13; i++) {
    cipher[String.fromCharCode(97 + i).toUpperCase()] = String.fromCharCode(
      110 + i
    ).toUpperCase();
  }

  let result = "";

  //if keys match with a letter from str return matching value
  //or if values match with a letter from str return matching key
  //else return the value as these will be non-alphabetic characters
  for (let i of str) {
    if (Object.keys(cipher).includes(i)) {
      result += cipher[i];
    } else if (Object.values(cipher).includes(i)) {
      result += Object.keys(cipher).find((key) => cipher[key] === i);
    } else {
      result += i;
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
