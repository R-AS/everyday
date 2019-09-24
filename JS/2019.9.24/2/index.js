/**
 * 冒泡排序
 * 思路: 相比相邻元素,小的排前
 * 时间复杂度: O(n^2)
 */
function bubbleSort(arr) {
  var len = arr.length;
  var temp;
  for (var i = 0; i < len; i++) {
    for (var j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
var arr = bubbleSort([7, 4, 2, 4, 5, 9, 0, 1]);
console.log(arr);