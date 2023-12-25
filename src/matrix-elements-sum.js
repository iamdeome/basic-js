const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  for(let i = 0; i < cols; i += 1) {
    for(let j = 0; j < rows; j += 1) {
      if (j === 0 || matrix[j - 1][i] !== 0) {
        sum += matrix[j][i];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
