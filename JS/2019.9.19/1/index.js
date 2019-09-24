/**
 * 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
 * 2. -webkit-border-image 转换后的结果为 webkitBorderImage
 */
/**
 * (?!^)\-开头仅当不含有-的时候开始匹配
 */
function cssStyle2DomStyle(sName) {
  return sName.replace(/(?!^)\-(\w)(\w+)/g, function(a, k, v){
    return k.toUpperCase() + v.toLowerCase();
  }).replace(/^\-/, '');
}

console.log(cssStyle2DomStyle('-webkit-border-image'));