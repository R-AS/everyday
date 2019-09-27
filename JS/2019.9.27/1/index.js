/**
 * 给定两个数组，编写一个函数来计算它们的交集
 * 示例 1:
 *  输入: nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出: [2,2]
 * 示例 2:
 *  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  输出: [4,9]
 */

//1.暴力法
var intersect = function (nums1, nums2) {
  var len1 = nums1.length;
  var res = [];
  for (var i = 0; i < len1; i++) {
    var index = nums2.indexOf(nums1[i]);
    if (index > -1) {
      res.push(nums2.splice(index, 1)[0]);
    }
  }
  return res;
};

//2.hash
var intersect = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var nums1Obj = {};
  var res = [];
  for (var i = 0; i < len1; i++) {
    if (nums1Obj[nums1[i]]) nums1Obj[nums1[i]]++;
    else nums1Obj[nums1[i]] = 1;  
  }
  for (var i = 0; i < len2; i++) {
    if (nums1Obj[nums2[i]]) {
      nums1Obj[nums2[i]]--;
      res.push(nums2[i]);
    } 
  }
  return res;
}