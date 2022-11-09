/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //init the totalSum and the leftSum;
  let leftSum = 0;
  let n = nums.length;
  let total = 0;
  nums.forEach((e) => {
    total += e;
  });

  for (let i = 0; i < nums.length; i++) {
    if (total - leftSum - nums[i] === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
//find the totalSum, and return the increment totalSum
//loop the array
//if the totalSum - leftSum - currentNum is equal to leftsum
//return the current index
// else increment the leftsum to the next currentNum
// or return -1
