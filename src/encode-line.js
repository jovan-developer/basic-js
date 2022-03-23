const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = [];
  let counter = 1;
  let idx = 0;
  let res = ''

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (i === 0) {
      result[idx] = [el, counter];
    } else if (arr[i] === arr[i - 1]) {
      counter++;
      result[idx] = [el, counter];
    } else {
      counter = 1;
      idx++;
      result[idx] = [el, counter];
    }
  }

  for (let i = 0; i < result.length; i++) {
    const el = result[i];

    res += el[1] > 1 ? `${el[1]}${el[0]}` : `${el[0]}`
  }


  return res;
}

encodeLine("aabbbcaaa");

module.exports = {
  encodeLine,
};
