/** Everything Be True
 *
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument)
 * truthCheck([{"single": "double"}, {"single": 'hi'}], "single") // true
 * truthCheck([{"single": "double"}, {"single": NaN}], "single") // false
 * truthCheck([{"single": "double"}, {"single": undefined}], "single") // false
 */

function truthCheck(collection, pre) {
  let result = true;
  collection.forEach((item) => {
    if (!item[pre]) {
      result = false;
    }
  });

  return result;
}

// With every() method

function truthCheckEvery(collection, pre) {
  // Step 1: we can just use every to make sure the value is true
  return collection.every((item) => item[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

truthCheckEvery(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 },
  ],
  "age"
);
