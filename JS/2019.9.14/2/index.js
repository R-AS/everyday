/**
 * 获取 url 中的参数
 * 1. 指定参数名称，返回该参数的值 或者 空字符串
 * 2. 不指定参数名称，返回全部的参数对象 或者 {}
 * 3. 如果存在多个同名参数，则返回数组
 */

function getUrlParam(sUrl, sKey) {
  var result = {};

  sUrl.replace(/\??(\w+)=(\w+)&?/g, function (a, k, v) {
    if (result[k] !== void 0) {
      var t = result[k];
      result[k] = [].concat(t, v);
    } else {
      result[k] = v;
    }
  });
  if (sKey === void 0) {
    return result;
  } else {
    return result[sKey] || '';
  }
}

var res = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'test');
console.log(res);