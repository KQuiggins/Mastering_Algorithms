function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const startIndex = alphabet.indexOf(arr[0]);

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] !== alphabet[startIndex + idx]) {
            return alphabet[startIndex + idx]
        }

    }
    return '';


};

module.exports = findMissingLetter;
