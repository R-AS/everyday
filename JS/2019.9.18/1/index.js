/** 
 * 判断输入是否是正确的邮箱格式
 */
function isAvailableEmail(sEmail) {
  return /^([\w+\.])+@\w+([.]\w+)+$/.test(sEmail); 
}
var res = isAvailableEmail('xdn2115@126.com');
console.log(res);