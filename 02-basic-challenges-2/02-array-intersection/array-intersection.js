// function arrayIntersection(arr1, arr2) {
//     const commonNumbers = [];

//     for (let idx = 0; idx < arr1.length; idx++) {
//         if (arr2.includes(arr1[idx]) && !commonNumbers.includes(arr1[idx])) {
//             commonNumbers.push(arr1[idx]);
//         }

//     }

//     return commonNumbers;
// };

// Using a set
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersectionArr = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            intersectionArr.push(num);
        }
    }

    return intersectionArr;
};

module.exports = arrayIntersection;
