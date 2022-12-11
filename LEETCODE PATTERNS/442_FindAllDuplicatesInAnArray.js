/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const hashSet = new Set();
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hashSet.has(nums[i])) {
      hashSet.add(nums[i]);
    } else {
      arr.push(nums[i]);
    }
  }
  return arr;
};
