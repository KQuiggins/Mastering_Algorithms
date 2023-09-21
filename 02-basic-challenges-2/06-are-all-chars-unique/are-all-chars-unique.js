// Using objects

// function areAllCharactersUnique(str) {
//     const charCount = {};

//     for (let idx = 0; idx < str.length; idx++) {
//         const char = str[idx];

//         if (charCount[char]) {
//             return false;
//         }

//         charCount[char] = true;

//     }

//     return true;
// };

// Using sets

function areAllCharactersUnique(str) {
    const charSet = new Set();

    for (let idx = 0; idx < str.length; idx++) {
        const char = str[idx];

        if (charSet.has(char)) {
            return false;
        }

        charSet.add(char);

    }

    return true;
};

module.exports = areAllCharactersUnique;
