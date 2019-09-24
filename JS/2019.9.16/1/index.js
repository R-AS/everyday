/**
 * 为 Array 对象添加一个去除重复项的方法
 * 输入:
 *  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
 * 输出:
 *  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
 */

Array.prototype.uniq = function () {
  var flag = true;
  var arr = [];
  this.map(item => {
    if (arr.indexOf(item) === -1) {
      if (item !== item) {  //排除NaN
        if (flag) {
          arr.push(item);
          flag = false;
        }
      } else {
        arr.push(item);
      }
    }
  });
  return arr;
} 

var arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(arr.uniq());