function findMaxNumber(arr) {

    let highestSoFar = -Infinity;

    arr.forEach((num) => {
        if (num > highestSoFar) {
            highestSoFar = num;
        }
    })
    return highestSoFar;
}

module.exports = findMaxNumber;
