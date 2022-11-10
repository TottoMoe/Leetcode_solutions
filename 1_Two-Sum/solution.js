/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const nMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num2 = target - nums[i];
    if (nMap.has(num2)) {
      return [nMap.get(num2), i];
    } else {
      nMap.set(nums[i], i);
    }
  }
  return [];
};
