/**
 * @param {number} n
 * @return {string}
 */

export default countAndSay = function(n) {
  let seq = "1";
  for (let i = 1; i < n; i++) {
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
