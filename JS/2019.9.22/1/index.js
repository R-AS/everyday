/**
 * 合并两个有序数组
 * 从后遍历
 * 思路:
 * 获取数组1,数组2以及合并之后的数组的长度
 * 从后遍历比较,当len1或len2为0的时候退出
 */
function merge(nums1, nums2) {
  var len1 = nums1.length - 1;
  var len2 = nums2.length - 1;
  var len = nums1.length + nums2.length - 1;

  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
}
var arr1 = [1, 2, 3, 4];
var arr2 = [2, 5, 6, 7, 8, 9];
merge(arr1, arr2);
console.log(arr1);