/**
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 * 否则如果字符 Unicode 编码 > 255 则长度为 2
 * 输入:
 *  'hello world, 牛客', false
 * 输出:
 *  17
 */

function strLength(s, bUnicode255For1) {
  var len = 0;
  if (bUnicode255For1) return s.length;
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) {
      len += 2;
    } else {
      len++;
    }
  }
  return len;
}
var len = strLength('hello world, 牛客', false);
console.log(len);