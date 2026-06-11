class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // what we can do is we can loop through the array, count its frequencies
        // and create a new array which is a that is a list of all the frequencies
        // associated with the numbers at that frequency
        // we create an array of arrays
        // then we loop backwards from that bucket of frequencies to find the top k frequencies
        // of numbers 
        const res = [];
        const map = new Map();
        const buckets = new Array(nums.length + 1);
        for(let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1);
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        for(const key of map.keys()) {
            const freq = map.get(key);
            if (!buckets[freq]) {
                buckets[freq] = [];
            }
            buckets[freq].push(key);
        }
        for(let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i]) {
                for(let j = 0; j < buckets[i].length; j++) {
                    res.push(buckets[i][j]);
                    if (res.length === k) {
                        return res;
                    }
                }
            }
        }
        return res;
    }
}
