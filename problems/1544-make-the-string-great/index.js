/**
 * @param {string} s
 * @return {string}
 */

const CHAR_CODE_CASE_DIFF = 32;

module.exports = (s) => {
  if (s.lenght < 1 || s.length > 100) return;

  const checkArr = (str) => {
    for (var i = 0; i < str.length - 1; i++) {
      if (
        Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) ==
        CHAR_CODE_CASE_DIFF
      ) {
        return checkArr(str.replace(str.charAt(i) + str.charAt(i + 1), ""));
      }
    }
    return str;
  };

  return checkArr(s);
};
