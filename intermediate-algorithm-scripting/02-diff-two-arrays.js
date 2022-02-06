/** Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i of arr1) {
    if (!arr2.includes(i)) {
      newArr.push(i);
    }
  }
  for (let i of arr2) {
    if (!arr1.includes(i)) {
      newArr.push(i);
    }
  }

  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
