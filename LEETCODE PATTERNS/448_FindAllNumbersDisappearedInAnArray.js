/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const hashSet = new Set();
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    hashSet.add(nums[i]);
  }
  for (let j = 1; j < nums.length + 1; j++) {
    if (!hashSet.has(j)) {
      arr.push(j);
    }
  }
  return arr;
};
