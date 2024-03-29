/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 * 示例 1:
 *  输入: haystack = "hello", needle = "ll"
 *  输出: 2
 * 示例 2:
 *  输入: haystack = "aaaaa", needle = "bba"
 *  输出: -1
 */
var strStr = function (haystack, needle) {
  var needleLen = needle.length;
  var haystackLen = haystack.length;
  var str = '';
  if (!needleLen) return 0;
  for (var i = 0; i < haystackLen; i++) {
    if (haystack[i] === needle[0]) {
      str = haystack.slice(i, i + needleLen);
      if (str === needle) return i;
    }
  }
  return -1;
};

var res = strStr('hello', 'll');
console.log(res);