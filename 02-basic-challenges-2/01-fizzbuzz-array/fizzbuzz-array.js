function fizzBuzzArray(num) {
    const arr = [];

    for (let idx = 1; idx <= num; idx++) {
        if (idx % 3 === 0 && idx % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (idx % 3 === 0) {
            arr.push("Fizz");
        } else if (idx % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(idx);
        }
    }
    return arr;
};

module.exports = fizzBuzzArray;
