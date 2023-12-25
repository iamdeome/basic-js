const { NotImplementedError } = require('../extensions/index.js');

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
  calculateDepth(arr) {
    if (!arr || !Array.isArray(arr)) {
      return 0;
    }
    let maxDep = 0;

    for(const element of arr) {
      const dep = this.calculateDepth(element);

      if(dep > maxDep) {
        maxDep = dep;
      }
    }

    return maxDep + 1;
  }
}

module.exports = {
  DepthCalculator
};
