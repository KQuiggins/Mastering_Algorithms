function validAnagrams(str1, str2) {
    const freqCount1 = str1.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    const freqCount2 = str2.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(freqCount1).every((char) => freqCount1[char] === freqCount2[char])
}

module.exports = validAnagrams;
