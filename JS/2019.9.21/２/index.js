/**
 * 删除链表的倒数第N个节点
 * 示例:
 *  给定一个链表: 1->2->3->4->5, 和 n = 2.
 *　当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * @param {*} head 
 * @param {*} n 
 */
var removeNthFromEnd = function(head, n) {
  //快慢指针
  if (!head || !head.next) return null;
  var fast = head, slow = head;
  
  for (var i = 0; i < n; i++) {
      fast = fast.next;
  }
  
  //删除到只剩下头结点
  if (!fast) {
      return head.next;
  }
       
  while (fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};