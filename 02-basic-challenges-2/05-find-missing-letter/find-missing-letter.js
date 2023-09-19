function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let start = arr[0].charCodeAt(0);

    for (let idx = 0; idx < arr.length; idx++) {
       const current = arr[idx].charCodeAt(0);

       if (current - start > 1) {
        return String.fromCharCode(start + 1);
       }

       start = current;

    }
    return '';


};
// function findMissingLetter(arr) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     const startIndex = alphabet.indexOf(arr[0]);

//     for (let idx = 0; idx < arr.length; idx++) {
//         if (arr[idx] !== alphabet[startIndex + idx]) {
//             return alphabet[startIndex + idx]
//         }

//     }
//     return '';


// };

module.exports = findMissingLetter;
