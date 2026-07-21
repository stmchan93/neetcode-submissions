class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // store freq count into a map
        // but maps you cant iterate through
        // brute force: go through the array k times and if you O(n*k) and if you find the element
        // and u can find the element that appears k times
        // thinking: you can use a map to store all these values into a map
        // if you store all these into a map, how do u find the top k?
        // so we have : 
        // 1 -> 1
        // 2 -> 2
        // 3 -> 3
        // 7 -> 2

        // in this map now what we can do is, if we loop through these counts
        // what i can do is i can create an array from size 1 -> nums.length
        // i can store in the array the frequency as the index, and the value
        // and start from the end of the array and iterate through it
        // and i can find, wherever the frequency is greater than lets say 0
        // we know we have found that value and we can just keep a counter of k  and subtract 
        // k until k == 0 then we know we've found all the desired outputs.
        const map = new Map();
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];
        for(let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1)
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        console.log("freq arr: ", freqArr)
        for(const [key, value] of map) {
            freqArr[value].push(key);
        }
        for(let i = freqArr.length - 1; i >= 0; i--) {
            if (freqArr[i].length === 0) {
                continue;
            }
            for(let j = 0; j < freqArr[i].length; j++) {
                res.push(freqArr[i][j]);
                k--;
                if (k === 0) {
                    return res;
                }
            }
        }
        return res;
    }
}
