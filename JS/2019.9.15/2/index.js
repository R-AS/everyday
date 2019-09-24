/**
 * 根据包名，在指定空间中创建对象
 * 输入:
 *  namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
 * 输出:
 *  {a: {test: 1, b: {c: {d: {}}}}}
 */

function namespace(oNamespace,sPackage) {
  var arr = sPackage.split('.');
  var obj = oNamespace;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      if (typeof obj[arr[i]] !== 'object') {
        obj[arr[i]] = {};
      }
    } else {
      obj[arr[i]] = {};
    }
    obj = obj[arr[i]];
  }
  return oNamespace;
}

var res = namespace({a: {test: 1, b: 2}}, 'a.b.c.d');
console.log(res);