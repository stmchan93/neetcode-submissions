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
    reverseList(head) {
        // head -> next
        // 0 -> 1 -> 2 -> 3
        // what we need to do is first
        // set curr = head
        // then we set prev = null
        // then we say curr.next = prev
        // then we say prev = curr
        // then we say curr 
        let curr = head;
        let prev = null;
        while (curr != null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
