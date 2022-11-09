/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    arr.push((sum += nums[i]));
  }
  return arr;
};
