class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        /*
            we knwo the maximum contianer we can have
            is based on the smaller side eof the container
            we can have a two pointer solution wehre we start at each
            end, and try to calculate hte container of water to be
            min(height[left], height[right]) * the distance between them
            and once we find the minimum one since we know we dont care
            about the shorter one we will move that one if it ssmaller
        */
        let left = 0;
        let right = heights.length - 1;
        let result = 0;
        while (left < right) {
            const distance = right - left;
            const area = Math.min(heights[left], heights[right]) * distance;
            result = Math.max(result, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return result;
    }
}
