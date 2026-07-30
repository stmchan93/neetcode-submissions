class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        /*
            i think what we really need to do is to look at the first character
            then see if we can decode it we take a look at hte substring from 
            i til some index, i guess we have to b y every like.
            we have to tkae one character, then we take that character and we tryt o see
            if we can decode the rest
        */
        return this.decode(s, 0, new Map());
    }

    decode(s, index, map) {
        if (index === s.length) {
            return 1;
        }
        if (s[index] === "0") {
            return 0;
        }
        if (map.has(index)) {
            return map.get(index);
        }
        let ways = this.decode(s, index + 1, map);
        if (index + 1 < s.length) {
            const strAsNum = Number(s.substring(index, index + 2, map));
            if (strAsNum >= 10 && strAsNum <= 26) {
                ways += this.decode(s, index + 2, map);
            }
        }
        map.set(index, ways);
        return ways;
    }
}
