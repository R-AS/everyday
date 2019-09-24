/**
 * 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。
 * 由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。
 * 实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
 * 示例:
 *  给定 n = 5，并且 version = 4 是第一个错误的版本。
 *  调用 isBadVersion(3) -> false
 *  调用 isBadVersion(5) -> true
 *  调用 isBadVersion(4) -> true
 *  所以，4 是第一个错误的版本。 
 * 思路:
 *  二分查找
 */
function isBadVersion(obj) { return obj.result; }
var solution = function (isBadVersion) {
  return function (n) {
    var start = 0;
    var end = n.length - 1;
    while (start < end) {
      var mid = Math.floor((start + end) / 2);
      if (!isBadVersion(n[mid])) end = mid;
      else start = mid + 1;
    }
    return n[end].version;
  }
}
var arr = [
  { version: 1, result: true },
  { version: 2, result: true },
  { version: 3, result: true },
  { version: 4, result: false },
  { version: 5, result: false },
  { version: 6, result: false },
  { version: 7, result: false },
  { version: 8, result: false },
  { version: 9, result: false }
]

var res = solution(isBadVersion)(arr);
console.log(res);