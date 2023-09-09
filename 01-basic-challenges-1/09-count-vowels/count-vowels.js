// function countVowels(str) {
//     const vowelsOnly = str.replace(/[^aeiouAEIOU]/g, '');

//     return vowelsOnly.length;
// };

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

   for (let i = 0; i < str.length; i++){
      if (vowels.includes(str[i])) {
          count++
      }
};

    return count;
};

module.exports = countVowels;
