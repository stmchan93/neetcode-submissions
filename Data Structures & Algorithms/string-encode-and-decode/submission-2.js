class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let i = 0; i < strs.length; i++) {
            res += strs[i].length + '#' + strs[i]; 
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    //5#Hello5#World
    decode(str) {
        const strs = [];
        let i = 0;
        let j = 0;
        let strLen = "";
        while (i < str.length) {
            if (str[j] !== '#') {
                strLen += str[j];
                j++;
            } else {
                const strLenAsNum = Number(strLen); // this is 5
                const stringStart = j + 1; // at h i guess
                strs.push(str.substring(stringStart, stringStart + strLenAsNum));
                i = strLenAsNum + j + 1;
                j = i;
                strLen = ''
            }
        }
        return strs;
    }
}
