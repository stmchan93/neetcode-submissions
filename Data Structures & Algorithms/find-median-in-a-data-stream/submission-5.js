class MedianFinder {
    // brute force: keep everything in an array, when u call find median, sort it, and 
    // find the middle (and if even you need to find mid - 1) to find the value you're looking for
    // a better way would be use min and max heaps so you can always keep track of the middle 
    // where the min heap would have the largest numbers in it, and the top of hte min heap 
    // would have the median value in it
    // but the top of hte max heap woudl have the smallest numbers but the top woudl also have the other
    // median in it
    // so getting findMedian would be O(1)
    // and adding numbers into our min/max heap would be O(log n) 
    // the way we would do this is to create our min/max heap in our constructor
    // then when adding numbers, we have to have some logic to decide how to put in our number
    // in our heaps so what we can do is we have ot always make sure that the heaps are balanced
    // if we dont make sure htey are balanced we cannot keep the findMedian easy and also it ensures that
    // the top of each min/max heap have the median of what we are looking for
    // so the logic owuld be.... when we start, we have to know which heap to insert it into
    // for no numbers, we would jsut insert into min heap
    // for any numbers gerater than 1, we have to compare which heap to put it into
    // i guess if we are keeping the invarnat that the minheap is always holds the greater values
    // as long as the number is less than the TOP of the  min heap, it will go into the max heap
    // otherweise it will go into the minheap
    // then findMedian will just find the tops of the min/max heap and return
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue());
        if (this.minHeap.size() >= this.maxHeap.size() + 2) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
            // this ensrues we are alwayas balanced because we know that we always
            // have to pop off the min queue's top into max when the difference in sizes is > 2
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const size = this.minHeap.size() + this.maxHeap.size();
        if (size % 2 === 0) {
            return (this.minHeap.front() + this.maxHeap.front()) / 2;
        } else {
            return this.minHeap.front();
        }
    }
}
