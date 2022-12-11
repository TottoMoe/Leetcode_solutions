/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
