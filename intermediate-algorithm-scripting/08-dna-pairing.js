/** DNA Pairing
 *
 * The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as a 2d array.
 *
 * pairElement("GCG");
 * [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
 *
 */

function pairElement(str) {
  const pairs = (char) => {
    if (char === "G") {
      return ["G", "C"];
    }
    if (char === "C") {
      return ["C", "G"];
    }
    if (char === "A") {
      return ["A", "T"];
    }
    if (char === "T") {
      return ["T", "A"];
    }
  };
  const result = [];
  for (let i of str) {
    result.push(pairs(i));
  }
  return result;
}

pairElement("GCG");
