// function formatPhoneNumber(numbers) {
//     let areaCode = numbers.slice(0, 3).join('');
//     let prefix = numbers.slice(3, 6).join('');
//     let lineNumber = numbers.slice(6).join('');
//     return `(${areaCode}) ${prefix}-${lineNumber}`;
// }


// function formatPhoneNumber(numbers) {

//     const formatted = numbers.join('');

//     return `(${formatted.substring(0, 3)}) ${formatted.substring(3, 6)}-${formatted.substring(6)}`;
// }

const formatPhoneNumber = (numbers) => `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;


module.exports = formatPhoneNumber;

