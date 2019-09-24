/**
 * 选择排序
 * 思路: 依次选择数组中最小的放进数组
 * 时间复杂度: O(n^2)
 */
function selectSort(arr) {
  var len = arr.length;
  var min, minIndex, temp;
  for (var i = 0; i < len; i++) {
    min = arr[i];
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
  }
  return arr;
}

var arr = selectSort([7, 4, 2, 4, 5, 9, 0, 1]);
console.log(arr);