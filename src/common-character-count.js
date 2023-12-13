const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i += 1) {
    for(let j = 0; j < s2.length; j += 1) {
      if (s1[i] != '+' && s1[i] === s2[j]) {
        let str1 = s1;
        let str2 = s2;
        s1 = str1.substring(0, i) + '+' + str1.substring(i + 1);
        s2 = str2.substring(0, j) + '+' + str2.substring(j + 1);
        count += 1;
        continue;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
