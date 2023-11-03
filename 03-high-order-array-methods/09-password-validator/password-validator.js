// Password must be 8 characters long
// Must contain at least 1 uppercase letter
// Must contain at least 1 lowercase letter
// Must contain at least 1 digit
// return true if valid, false otherwise

function validatePassword(password) {

    const passwordArr = password.split('');

    const isLengthValid = passwordArr.length >= 8;

    const hasUpperCase = passwordArr.some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    const hasLowerCase = passwordArr.some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

    const hasDigit = passwordArr.some((char) => !isNaN(parseInt(char, 10)));

    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;
