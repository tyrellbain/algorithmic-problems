/**
 * @param {number} n
 * @return {string}
 */

export default countAndSay = function (n) {
  let startTerm = "1";
  if (n === 1) return startTerm;
  return generateSequence(n, startTerm, 2);
};

const generateSequence = function (n, sequence, currTerm) {
  let seq = "";
  let freq = 1;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[i + 1]) {
      freq++;
    } else if (sequence[i] !== sequence[i + 1]) {
      seq += freq + sequence[i];
      freq = 1;
    }
  }
  return n === currTerm ? seq : generateSequence(n, seq, currTerm + 1);
};
