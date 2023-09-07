function calculator(num1, num2, operator) {

    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error('Please pick the correct operator (+ - * /)!');
            break;
    }

    return result;
}

module.exports = calculator;
