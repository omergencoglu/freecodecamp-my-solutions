/** Steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */

function steamrollArray(arr) {
  const newArr = [];
  const arrayCheck = (array) => {
    for (let i of array) {
      if (Array.isArray(i)) {
        arrayCheck(i);
      } else {
        newArr.push(i);
      }
    }
  };
  arrayCheck(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
