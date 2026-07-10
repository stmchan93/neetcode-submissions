class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // 【1，2，3，4】
        // target = 4
        // [2,5,10] target = 7
        // basically the idea is u have 2 pointers, one at the end nad one at the start
        // and then u increment them so 2 + 10 and u see if it equals to ur atarget
        // if it is greater than ur target, then u dedrease the right pointers
        // if it is less than u increase your left
        // do this until you get your target and ur done

        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [1 + left, 1 + right];
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
        return [-1, -1];
    }
}
