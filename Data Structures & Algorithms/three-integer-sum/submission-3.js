class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
            brute force: keep two indices the same, and sum up from left to right, move that one pointer
            then when ur done with the array, do the same by moving one pointer over, and sum the rest
            keep doing this. the repeated work ends up being that... you keep looping through the digits
            over and over again to calculate the sum , for exmaple the last pointer keeps trying to find the sum
            of 2, -1, -4 a bunch of times as we itrerate through j.
            now the next thing is, ifi that is the repeated work,t he answer is can we do better.
            if our goal is to find the sum of things that equal to 0, there has to be some way to calcuate this fast
            so im thinking we need to sort the array first. this is becuase if we hav ea value that is greater than 0
            we know to move a right pointer down, and if a value summed is greater than 0 then we move it up 
            so we move the avleut to the left
            [-4,-1,-1,0,1,2] <- this is  what we have
            i guess what we do is we keep one digit stil, like i = -4 and then we do a two pointer solution to see
            if some triplet of the valeus equals to 0
            the rpoblem becomes then how do we make sure we don't have duplicates
            i think what we need to do is if we see a duplicate, we have to sum up -1 0 1 and then we have to 
            find if afte rwe do that sum, we have to see if the next value after it is equal to the same and if it is
            we just skip it?
            meaning if i have

            [-1, 0, 1]
            sum them up to equal 0
            but the next number is -1 also
            then i do if i - 1 === i then i have to increment the pointer so that i dont re-try -1
            i guess i;d have to to do the same with j and k
        */
        const res = [];
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i-1] === nums[i]) {
                // im thinking going forward, if i === i + 1 then we just skip it and go to the enxt one
                // because its ad uplicte
                continue;
            }
            // then we ahve to do two-pointer with j and k
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if(sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[k] === nums[k + 1]) {
                        // same with here, if k === k - 1 which means its equal to the prev k 
                        // just decrement k to skip duplciates going down
                        k--;
                    }
                }
            }
        }
        return res;
    }
}
