// function removeDuplicates(arr) {
//    const noDuplicates = [];

//    for (let idx = 0; idx < arr.length; idx++) {
//     if(!noDuplicates.includes(arr[idx]))
//         noDuplicates.push(arr[idx]);
//    }

//    return noDuplicates;
// }


function removeDuplicates(arr) {

    return Array.from(new Set(arr));
}


module.exports = removeDuplicates;
