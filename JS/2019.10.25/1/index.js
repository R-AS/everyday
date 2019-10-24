/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 * 示例 2:
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀。
 * 思路：
 *  1. 若数组长度为0则直接返回 ""
 *  2. 默认公共前缀为数组首元素
 *  3. 遍历后面的元素与公共前缀作比较
 *  4. 若存在与公共元素不同的地方，则删减公共前缀
 *  5. 若公共元素为空则直接返回
 *  6. 完成遍历，返回公共前缀
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;
    if (len <= 0) return '';
    var ans = strs[0];        //默认公共前缀为数组首元素
    for (var i = 1; i < len; i++) {   //遍历后面的元素与公共前缀作比较
      for (var j = 0; j < ans.length && j < strs[i].length; j++) {
        if (ans[j] != strs[i][j]) break;
      }
      ans = ans.substr(0, j);   //若存在与公共元素不同的地方，则删减公共前缀
      if (!ans) return ans;     //若公共元素为空则直接返回
    }
    return ans;
};
var strs = ["flower","flow","flight"];
var res = longestCommonPrefix(strs);
console.log(res);