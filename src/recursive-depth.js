const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let counter = 1;
    let arr = a;

    for (let i = 0; i < arr.length; i++) {
      if (typeof a[i] === "object") {
        counter += this.calculateDepth(arr.flat());
        break;
      }
    }

    console.log(counter);
    return counter;
  }
}

const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5]);
//  => 1
depthCalc.calculateDepth([1, 2, 3, [4, 5]]);
//  => 2
depthCalc.calculateDepth([[[]]]);
// => 3

module.exports = {
  DepthCalculator,
};
