/**
 * 反转一个单链表。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * @param {*} head 
 */
var reverseList = function(head) {
  var pre = null;
  var current = head;
  while (current != null) {
      var next = current.next;
      current.next = pre;
      pre = current;
      current = next;
  }
  return pre;
};