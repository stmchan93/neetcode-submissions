class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let i = 0; i < strs.length; i++) {
            res = res.concat(strs[i].length + "#" + strs[i]);
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // i can think of i have a left and right pointer
        // i move the right pointer until i see a #
        // if i see a # then i do a substring on the string 
        // and amke the left pointer equal to the right pointer and keep going
        // this might not work for characters with # so ill have to figure this out
        let left = 0;
        const res = [];
        for(let right = 0; right < str.length; right++) {
            if (str[right] === '#') {
                const lengthAsStr = str.substring(left, right);
                const lenAsNum = Number(lengthAsStr);
                res.push(str.substring(right + 1, right + 1 + lenAsNum));
                left = right + 1 + lenAsNum;
                right = left;
            }
        }
        return res;
    }
}
