class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();

        // two problems: 1 is that you need to be able to add the numbers, and make them
        // sorted. the numbers don't come in sorted order
        // secondly you need to find the median and u could loop through the entire array
        // but O(n/2), and u have to find the "middle" so it would mean the mean of the two
        // middle values so in the case of 1 2 3 4, it would be like 2 and 3. i think the
        // middle values for even mean that there are equal numbres to the left and right
        // of the two numbers in the middle

        // first of all, when adding a number... i think we need to thinking bout this
        // we just have to add the number to the array but like adding a number
        // would be O(n) because we have to keep comparing where it is in the array
        // but mabye there's a better way...
        // we know that our array is sorted so it feels like we need a min heap because
        // root will always have the the minimum so it will alwys be sorted like that
        // and then we jsut simply ahve to enqueue the value which gives O(logn)
        //then to find the median, could we use binary search? to find the 
        // middle number because it's all sorted?
        // if we jsut want to find the median can't we just binary serach
        // and find the mid point, and then we just need to calculate how many elements
        // from the right and from the left mid + 1 or mid - 1 is, and whichever one is equal
        // that is the median
        // we dont even need binary search in this case i think we jsut need to get the midpoint
        // oh nvm we need to dequeue all the elements from min heap to create the array
        // and then just find the midpoint

    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {

        // min heap and max heap
        // so the min heap will have the largest elements
        // max heap will contain the smallest elements
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.pop());
        // 3 and 2 will be min heap 
        if (this.minHeap.size() - this.maxHeap.size() >= 2) {
            this.maxHeap.enqueue(this.minHeap.pop());
        }
        
    }

    /**
     * @return {number}
     */
    findMedian() {
        if ((this.minHeap.size() + this.maxHeap.size()) % 2 !== 0) {
            // we have an odd number of elemenets, so our number is always teh top of
            // the min heap as the min heap has the largest numbers
            return this.minHeap.front();
        } else {
            return (this.minHeap.front() + this.maxHeap.front()) / 2;
        }
    }
}
