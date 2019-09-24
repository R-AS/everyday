/**
 * 快速排序
 * 思路: 找基准,左右分
 * 时间复杂度: O(nlogn)
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

var arr = quickSort([7, 4, 2, 4, 5, 9, 0, 1]);
console.log(arr);