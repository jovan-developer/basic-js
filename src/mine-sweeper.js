const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example

 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let top = checkField(matrix, i - 1, j);
      let bottom = checkField(matrix, i + 1, j);
      let left = checkField(matrix, i, j - 1);
      let right = checkField(matrix, i, j + 1);
      let topL = checkField(matrix, i - 1, j - 1);
      let topR = checkField(matrix, i - 1, j + 1);
      let bottomL = checkField(matrix, i + 1, j - 1);
      let bottomR = checkField(matrix, i + 1, j + 1);

      let mines = top + bottom + left + right + topL + topR + bottomL + bottomR;

      result[i].push(mines);
    }
  }

  function checkField(matrix, i, j) {
    if (typeof matrix[i] !== "undefined") {
      if (typeof matrix[i][j] !== "undefined") {
        return matrix[i][j] === true ? 1 : 0;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
