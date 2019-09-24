/**
 * 在有序数组中查找目标元素索引
 */
function search(arr, num) {
  var start = 0, end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (num < arr[mid])  end = mid - 1;
    else if (num > arr[mid])  start = mid + 1;
    else return mid;
  }
  return -1;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var index = search(array, 2);
console.log(index);