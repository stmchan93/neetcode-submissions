class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // the brute force solution would be to loop through every single height and keep a maxArea
    // and see if one number minus the other numbr would result in in the correct height
    // the problem with this is that there is a lot of repeated work going through the second loop
    // multiple times
    // what we could do is try a different solution where i think we can try a sliding window solution
    // where your window is at hte beg and at the end of the container, and what you do is you go through
    // the entire container and you check hey Math.max(A,B) times the height of the container to get the water
    // in the container where a is the front and B is the back
    // if you get a number, we keep going until we hit the end of hte array
    // we have to "slide" the window if we find that whichever height is smaller, we either move to the next value
    // like A++ or B-- in the case that B is smaller than A. keep doing this until you have done this through the 
    // entire array

    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const smallerHeight = Math.min(heights[left], heights[right]);
            // we'll use smallerHeight to calculate the area now
            const currArea = smallerHeight * (right - left);
            max = Math.max(max, currArea);
            if (heights[left] < heights[right]) {
                left++; 
            } else {
                right--;
            }
        }
        return max;
    }
}
