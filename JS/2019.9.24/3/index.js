/**
 * 插入排序
 * 思路: 
 * 1. 默认首元素已排序
 * 2. 遍历数组,与已排序的元素进行比较,大的往后移,直到找到比自己小的元素,插入到其后
 * 时间复杂度: O(n^2)
 */
function insertSort(arr) {
  var len = arr.length;
  var result = arr.slice(0);
  for (var i = 1; i < len; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && temp <= result[j]) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = temp;
  }
  return result;
}
var arr = insertSort([7, 4, 2, 4, 5, 9, 0, 1]);
console.log(arr);