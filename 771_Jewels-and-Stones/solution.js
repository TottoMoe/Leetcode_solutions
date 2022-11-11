/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let smap = new Map();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    smap.set(jewels[i], i);
  }
  for (let j = 0; j < stones.length; j++) {
    if (smap.has(stones[j])) {
      count++;
    }
  }
  return count;
};
