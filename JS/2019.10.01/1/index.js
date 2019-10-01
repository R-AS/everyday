/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 *  输入: [0,1,0,3,12]
 *  输出: [1,3,12,0,0]
 */
var moveZeroes = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else if (count > 0) {
      var temp = nums[i - count];
      nums[i - count] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
};
var res = moveZeroes([0,0,1]);
console.log(res);