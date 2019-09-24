/**
 * 归并排序
 * 思路: 拆分,排序,合并,递归
 * 时间复杂度: O(nlogn)
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return temp.concat(left, right);
}

var arr = mergeSort([7, 4, 2, 4, 5, 9, 0, 1]);
console.log(arr);