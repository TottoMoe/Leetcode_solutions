/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const hashSet = new Set();

  while (headB !== null) {
    hashSet.add(headB);
    headB = headB.next;
  }

  while (headA !== null) {
    if (hashSet.has(headA)) return headA;
    hashSet.add(headA);
    headA = headA.next;
  }
  return null;
};
