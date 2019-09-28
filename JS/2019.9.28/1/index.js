/**
 * 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1:
 *  输入: [1,2,3]
 *  输出: [1,2,4]
 *  解释: 输入数组表示数字 123。
 * 示例 2:
 *  输入: [4,3,2,1]
 *  输出: [4,3,2,2]
 *  解释: 输入数组表示数字 4321。
 */
var plusOne = function (digits) {
  var len = digits.length;
  for (var i = len - 1; i >= 0; i--) {  
    digits[i]++;
    digits[i] %= 10;  //%10不为0时返回,为0时进一
    if (digits[i] != 0) return digits;
  }
  digits.unshift(1);  //全为0时,收元素为1
  return digits;
}
var res = plusOne([9, 9]);
console.log(res);