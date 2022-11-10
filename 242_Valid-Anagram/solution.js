/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sMap = new Map();
  if (s.length !== t.length) {
    return false;
  } else {
    let sMap = new Map();

    for (let i = 0; i < s.length; i++) {
      if (!sMap.has(s[i])) {
        sMap.set(s[i], 1);
      } else {
        let val = sMap.get(s[i]);
        sMap.set(s[i], val + 1);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (!sMap.has(t[i])) {
        return false;
      } else {
        let val = sMap.get(t[i]);

        if (val === 1) {
          sMap.delete(t[i]);
        } else {
          sMap.set(t[i], val - 1);
        }
      }
    }
    return true;
  }
};

// set shashmap, and thashmap,
// loop ea
// {a: 2}
// {}
