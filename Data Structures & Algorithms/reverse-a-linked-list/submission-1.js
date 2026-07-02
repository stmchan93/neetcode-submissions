/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    /*
prev = head of REVERSED part 
curr is head of UNVERSED part 
next is the next pointer from HEEAD oko
    */
    reverseList(head) {
        let curr = head;
        let prev = null;
        // 0 -> 1 -> 2 -> 3
       while (curr) {
        let next = curr.next;
        // 0 points to NULL
        curr.next = prev;
        // PREV = 1 
        prev = curr;
        // curr = 1
        curr = next;
       }
        return prev;
    }
}
