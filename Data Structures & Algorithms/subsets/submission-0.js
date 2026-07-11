class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // get all combinations of all possible numbers in this array
        // i need to basically loop through every single combination of number(s)
        // and return them in a 2-d array
        // brute force: n^3 because i would loop thorugh the array 0 -> nums.length times
        // for nums.length numbers 
        // backtracking solution where 
        // recursive function that calls some function findSubset(index, nums, currRes, res)
        // res = [[]]
        // currRes = []
        // res.add(currRes)
        // loop through nums.length and push a number into currRes
        // recurse into findSubset function
        // if index === nums.length because we will push the number at index into our array
        // return 
        // then continue with the loop on line 17 and remove a number an keep trying for new numbers to add into into subset

        const res = [];
        const curRes = [];
        this.findSubsets(res, curRes, nums, 0);
        return res;
    }

    // index tells me where i am in finding the combination of nums[i]
    findSubsets (res, curRes, nums, index) {
        res.push([...curRes]);
        for(let i = index; i < nums.length; i++) {
            console.log("Cur res: ", curRes);
            curRes.push(nums[i]);
            this.findSubsets(res, curRes, nums, i + 1);
            curRes.pop();

            // curRes.splice(i, 1);
            // 1, 2, 3
            // i === 2
        }
    }
}
