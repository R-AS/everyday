/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4] 
 */
var rotate = function(nums, k) {
  for (var i = nums.length - 1; i >= nums.length - k; i--) {
    var item = nums.pop();
    nums.unshift(item);
  }
  return nums;
};  

var res = rotate([1,2,3,4,5,6,7], 3);
console.log(res);