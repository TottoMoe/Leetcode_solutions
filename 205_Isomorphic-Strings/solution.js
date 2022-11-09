/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = new Map(),
    mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) {
      let val = mapS.get(s[i]);
      if (t[i] !== val) return false;
    } else if (mapT.has(t[i])) {
      return false;
    } else {
      mapS.set(s[i], t[i]);
      mapT.set(t[i], s[i]);
    }
  }
  return true;
};


//Use Hashmap:
  // map.has()
  // map.get()
  // map.set()