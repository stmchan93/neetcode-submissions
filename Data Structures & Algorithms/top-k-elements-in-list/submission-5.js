class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute force: looop through the array once keep track of allt he numbers in a map
        // loop through teh map k times to figure out which is the max frequency
        // O(n*k) but this seems wrong because it is a lot of repeated work to loop through 
        // the map k times
        // can we do better
        // 1 -> 1
        // 2 -> 2
        // 3 -> 3

        // store the frequencies as keys in to an array of size nums.length
        // you can go backwards from the array to find out the numbers that appear k times because
        // these numbers are found k times 
        // first of all we need to find the frequency count of all these numbers
        // after we have a map, we should loop through this map and store the value of these keyes
        // as values in the array
        // then loop backwards
        const res = [];
        const freqArr = new Array(nums.length + 1).fill(0);
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1)
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        console.log("Map: ", map);
        for(const [key, value] of map) {
            if (freqArr[value] !== 0) {
                freqArr[value].push(key)
            } else {
                freqArr[value] = [key]
            }
        }
        for(let i = freqArr.length - 1; i >= 0; i--) {
            for(let j = 0; j < freqArr[i].length; j++) {
                res.push(freqArr[i][j]);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;

    }
}
