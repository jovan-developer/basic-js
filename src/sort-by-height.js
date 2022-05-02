const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = [...arr];
  let result = [];
  let idx = 0;

  arr2 = arr2.sort((a, b) => a - b).filter((el) => el != -1);

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el !== -1) {
      result.push(arr2[idx]);
      idx++;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
[-1, 150, 160, 170, -1, -1, 180, 190];

module.exports = {
  sortByHeight,
};
