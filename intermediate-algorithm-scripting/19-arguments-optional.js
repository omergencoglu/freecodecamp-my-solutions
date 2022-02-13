/** Arguments Optional
 *
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 * If either argument isn't a valid number, return undefined.
 *
 * addTogether(2)(3); // 5
 * addTogether(2, '3') // undefined
 * addTogether(2, 3); // 5
 *
 */

function addTogether(...args) {
  if (args.some((item) => !Number.isInteger(item))) {
    return undefined;
  }
  if (!args[1]) {
    return function (a) {
      if (!Number.isInteger(a)) {
        return undefined;
      } else {
        return args[0] + a;
      }
    };
  }
  if (args[0] && args[1]) {
    return args[0] + args[1];
  }
}

addTogether(2, 3);
addTogether(5)(7);
