/** Roman Numeral Converter
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
  const ones = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };

  const tens = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  };

  const hundreds = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  };

  const thousands = { 1: "M", 2: "MM", 3: "MMM" };

  const romanArr = [ones, tens, hundreds, thousands];

  const numArr = num.toString().split("").reverse();
  let romanNum = [];

  for (let i = 0; i < numArr.length; i++) {
    romanNum.push(romanArr[i][numArr[i]]);
  }

  return romanNum.reverse().join("");
}

convertToRoman(36);
convertToRoman(798);
