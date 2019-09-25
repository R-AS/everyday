/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。
 * 示例 1：
 *  输入: "babad"
 *  输出: "bab"
 *  注意: "aba" 也是一个有效答案。
 * 示例 2：
 *  输入: "cbbd"
 *  输出: "bb"
 */
var longestPalindrome = function(s) {
  if (!s.length) return '';
  var newStr = s.split('').reverse().join('');
  var len = s.length;
  var maxLen = 0;
  var maxEnd = 0;
  var result = new Array(len);
  for (var i = 0; i < len; i++) {
    result[i] = new Array(len);
  }
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (s[i] === newStr[j]) {
        if (i === 0 || j === 0) {
          result[i][j] = 1;
        } else {
          result[i][j] = result[i - 1][j - 1] + 1;
        }
      } else {
        result[i][j] = 0;
      }
      if (result[i][j] > maxLen) {
        maxLen = result[i][j];
        maxEnd = j;
      }
    }
  }
  return s.substring(maxEnd + 1 - maxLen, maxEnd + 1);
};

var res = longestPalindrome('aaccdeccaa');
console.log(res);