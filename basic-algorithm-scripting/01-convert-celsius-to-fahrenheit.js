/** Convert Celsius to Fahrenheit
 *
 * The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32
 *
 * convertToF(0) should return a number
 * convertToF(-30) should return a value of -22
 * convertToF(20) should return a value of 68
 */

function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

convertToF(30);
