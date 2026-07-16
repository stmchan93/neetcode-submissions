class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // it looks like you can store some water if you have some dip between
        // the heights so its like
        // 0, 2, 0, 3
        // 2, and 3 at indexes 1 and 3, it looks like you can't store water at the ends either
        // in between 2 and 3 there is some distance and you take the minimum times the 
        // number of indeces between the heights to get the amount of water
        // and then you see 3 and 3 , you notice that because in this case,
        // you find something that is <= to the next number, and if it is, you 
        // know you have another place where you can store water
        // and you subtract out hte 1's because 3x3 = 9, - 1 - 1 = 7
        // 2x1 = 2
        // so you have a sliding window, starting at 0, and 0, you slide
        // you see if the window size * the lesser of the two heights where
        // ther right height needs to be higher than the left height
        // once you get to that point where the right is >= to the left, 
        // you find the window size, adn u multiply it by the lesser of the two heights
        // and you get that amount of water
        // and you do it for all the heights
        let left = 0;
        let right = height.length - 1;
        let maxSoFarLeft = height[left]
        let maxSoFarRight = height[right];
        let res = 0;

        while (left < right) {
            if (maxSoFarLeft < maxSoFarRight) {
                left += 1;
                // if the currnet height is LESS than the max of the left
                // we know we can bank some water here bc we know that
                // right can hold the rest of the water
                if (height[left] < maxSoFarLeft) {
                    res += maxSoFarLeft - height[left];
                } else {
                    maxSoFarLeft = height[left];
                }
            } else {
                right--;
                if (height[right] < maxSoFarRight) {
                    res += maxSoFarRight - height[right];
                } else {
                    maxSoFarRight = height[right];
                }
            }
        }
        return res;
    }
}
