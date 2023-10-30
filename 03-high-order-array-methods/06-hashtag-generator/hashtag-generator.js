function generateHashtag(str) {
    const hashtag = str.split(' ').reduce(function (tag, word) {
        return tag + word.charAt(0).toUpperCase() + word.slice(1)
    }, '#')

    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}


// function generateHashtag(str) {
//     if (str.trim() === '') {
//         return false;
//     }

//     const words = str.trim().split(/\s+/);

//     const capitalizedWords = words.map((word) => {
//         return word[0].toUpperCase() + word.slice(1);
//     });

//     const hashtag = '#' + capitalizedWords.join('');

//     return hashtag.length > 140 ? false : hashtag;
// }

module.exports = generateHashtag;
