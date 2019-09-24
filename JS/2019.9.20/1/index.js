/**
 * 从排序数组中删除重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function (nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  return nums.length;
}
var len = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4]);
console.log(len);