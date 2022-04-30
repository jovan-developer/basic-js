const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = names;
  let obj = {};

  let stopRec = false;

  function checkRepeat(arr) {
    const array = arr;

    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      if (obj[el]) {
        arr[i] = `${el}(${obj[el]})`;
        obj[el] += 1;
      } else {
        obj[el] = 1;
      }
    }

    obj = {};
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf[arr[i]]) {
    } else {
      checkRepeat(arr);
    }
  }

  checkRepeat(arr);

  return arr
}

renameFiles(["file", "file", "image", "file(1)", "file"]);

module.exports = {
  renameFiles,
};
