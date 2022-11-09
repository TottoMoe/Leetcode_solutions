/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pt1 = 0;
  let counter = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[pt1]) {
      if (s[pt1] === t[i]) {
        counter++;
        pt1++;
      }
    }
  }
  return s.length === counter;
};
