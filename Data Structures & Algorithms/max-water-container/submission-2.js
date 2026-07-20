class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // brute force: find two heights, take the minimum, of each of htem,
        // and then calculate the difference in distance between them and then 
        // multiply that by the minimum of the heights do this for every combination
        // O(n^2) 
        // but in reality you could have a two pointer solution starting at the 
        // beg. and end, you would take the minimum ehgihts, and then multiply 
        // the difference in distance between the two heights, and store the maxmimum
        // that you saw so far. then becuase you know that the smaller height 
        // will always give the least amount of water you can store, you should
        // move the pointer over that has the more minimum height. do this for until
        // left === right and then youre done

        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while (left < right) {
            const length = Math.min(heights[left], heights[right]);
            const width = right - left;
            max = Math.max(max, length * width);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
