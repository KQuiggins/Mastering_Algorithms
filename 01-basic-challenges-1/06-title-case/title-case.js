function titleCase(str) {
    let newStr = str.toLowerCase().split(' ');

   for (let i = 0; i < newStr.length; i++){
         newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);

    };




    return newStr.join(' ');
}

module.exports = titleCase;
