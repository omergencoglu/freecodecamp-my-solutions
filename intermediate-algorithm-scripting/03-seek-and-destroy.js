/** Seek and Destroy
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Note: You have to use the arguments object.
 */

function destroyer(...args) {
  let newArr = args[0];
  for (let i of args.slice(1)) {
    if (newArr.includes(i)) {
      newArr = newArr.filter((item) => item !== i);
    }
  }

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
