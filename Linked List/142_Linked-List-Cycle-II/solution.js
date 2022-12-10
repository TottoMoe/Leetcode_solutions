/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Use hashSet method
// 1. Traverse over the given nodes and add each node to Hash Set.
// 2. If you encounter a node that is already in the Hash Set; It means the cycle has stated, so return that node.
// 3. If the traversal is completed; It means there are no cycle, so returns null. 
var detectCycle = function (head) {
  const hashSet = new Set();

  while (head) {
    hashSet.add(head);
    if (hashSet.has(head.next)) {
      return head.next;
    }
    head = head.next;
  }
  return null;
};


// Two pointers method
// var detectCycle = function(head) {
//   let slow = head;
//   let fast = head;

//   while(fast && fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       slow = head;
//       while(slow !== fast) {
//         slow = slow.next;
//         fast = fast.next;
//       }
//       return slow;
//     }
//   }
//   return null;
// }