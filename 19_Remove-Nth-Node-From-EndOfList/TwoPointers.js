/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head;
  let p2 = head;

  while (n > 0) {
    p1 = p1.next;
    n--;
  }

  if (p1 === null) {
    head = head.next;
    return head;
  }
  while (p1.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;

  return head;
};

// Fine the length of the LinkList
// let length = 0;
// let currentNode = head
// while (currentNode !== null) {
//   currentNode = currentNode.next;
//   length++;
// }