class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // what we do here is we enqueue k elements into the array,
        // and if we get to the point where we enqueued more than k elements into the array
        // we pop off hte root 
        // and then we are left with k elelements in the minheap
        // then we can just return the min heap
        const minHeap = new MinPriorityQueue();
        for(let i = 0; i < nums.length; i++) {
            minHeap.enqueue(nums[i]);
            if (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }
        return minHeap.front();
    }
}
