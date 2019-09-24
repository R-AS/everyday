/**
 * 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 
 * f(1) = 1, f(2) = 1 等
 */
function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}
function fibonacci(n) {
  var num1 = 1;
  var num2 = 1;
  for (var i= 2; i <= n; i++) {
    num2 += num1;
    num1 = num2 - num1;
  }
  return num2;
}