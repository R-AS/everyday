/**
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 *  给定 nums = [2, 7, 11, 15], target = 9
 *  因为 nums[0] + nums[1] = 2 + 7 = 9
 *  所以返回 [0, 1]
 */
//1.暴力法
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [].concat([i, j]);
      }
    }
  }
};

//2.一遍哈希
var twoSum = function (nums,target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var temp = target - nums[i];
    var j = map.get(temp);
    if (!isNaN(j)) return [].concat([j, i]);
    map.set(nums[i], i);
  }
}

var res = twoSum([2, 7, 11, 15], 9);
console.log(res);