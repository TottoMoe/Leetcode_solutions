/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const hashSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!hashSet.has(nums[i])) {
      hashSet.add(nums[i]);
    } else {
      return nums[i];
    }
  }
};
