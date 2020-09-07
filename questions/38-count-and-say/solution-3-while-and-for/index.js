/**
 * @param {number} n
 * @return {string}
 */

module.exports = countAndSay = (n) => {
  let seq = "1";
  while (--n) {
    let freq = 1,
      curr = "";
    for (let j = 0; j < seq.length; j++) {
      if (seq[j] === seq[j + 1]) {
        freq++;
      } else {
        curr += freq + seq[j];
        freq = 1;
      }
    }
    seq = curr;
  }
  return seq;
};
