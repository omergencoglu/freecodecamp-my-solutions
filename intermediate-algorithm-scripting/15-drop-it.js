/** Drop it
 *
 * 1 - iterate through and remove each element starting from the first element (the 0 index) until the function func returns true
 * 2 - return the rest of the array once the condition is satisfied
 *
 * dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []
 * dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
 *
 */

function dropElements(arr, func) {
  let newArr = [];
  for (let i of arr) {
    if (func(i)) {
      newArr = arr.slice(arr.indexOf(i));
      break;
    }
  }

  return newArr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
