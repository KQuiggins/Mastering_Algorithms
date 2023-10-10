// function sumOfEvenSquares(numbers) {

//     const evenSquares = numbers.filter((num) => num % 2 === 0)
//         .map((num) => num ** 2)
//         .reduce((acc, num) => acc + num, 0);

//     return evenSquares;
// }

function sumOfEvenSquares(numbers) {
    let evenSquares = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenSquares += numbers[i] ** 2;
        }
    };


    return evenSquares;
}

module.exports = sumOfEvenSquares;
