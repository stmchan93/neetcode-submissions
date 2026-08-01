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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        /*
            so what we do is we create a new pointer?
            and we loop through list 1 and list2
            while (list1 != null && list2 !== null) 
            then we say 
            list1.next = list2
            if (list1.val > list2.val)
            curr = null
            curr = list2.val
            list2. = list2.next
            curr = curr.next
        */
        let dummy = new ListNode();
        let tail = dummy;
        while (list1 !== null && list2 !== null) {
            if (list2.val > list1.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        if (list1 !== null) {
            tail.next = list1;
        } else {
            tail.next = list2;
        }
        return dummy.next;
        // but how do you return the head? also what if list1 === null && list2 !== null
    }
}
