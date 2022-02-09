/** Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 */

function convertHTML(str) {
  const result = str.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "<") {
      result[i] = "&lt;";
    }
    if (result[i] === "&") {
      result[i] = "&amp;";
    }
    if (result[i] === ">") {
      result[i] = "&gt;";
    }
    if (result[i] === '"') {
      result[i] = "&quot;";
    }
    if (result[i] === "'") {
      result[i] = "&apos;";
    }
  }
  return result.join("");
}

convertHTML("Dolce & Gabbana");
