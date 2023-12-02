function permutations(str) {
    let result = [];

    if (str.length === 0) {
        result.push('');
        return result;
    }

    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let innerPermutations = permutations(remainingChars);

        for (let j = 0; j < innerPermutations.length; j++) {
            result.push(firstChar + innerPermutations[j]);
        }
    }

    return result;
}

module.exports = permutations;
