const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = String(n).split("").map(Number);

  const findMin = (n1, n2, n3) => {
    if (n1 > n2) {
      return n2 > n3 ? [n1, n2] : [n1, n3];
    } else {
      return [n2, n3]
    }
  };

  if (numbers.length <= 2) {
    let min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
  } else if (numbers.length === 3) {
    numbers = findMin(numbers[0], numbers[1], numbers[2]);
  } else {
    let min = findMin(
      numbers[numbers.length - 3],
      numbers[numbers.length - 2],
      numbers[numbers.length - 1]
    );
    numbers.splice(-1, 1);
    numbers[numbers.length - 2] = min[0];
    numbers[numbers.length - 1] = min[1];
  }

  return Number(numbers.join(""));
}

deleteDigit(449);
deleteDigit(441);
deleteDigit(1001);
deleteDigit(152);

module.exports = {
  deleteDigit,
};
