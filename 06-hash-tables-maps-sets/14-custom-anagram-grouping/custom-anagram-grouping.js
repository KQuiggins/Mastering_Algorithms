const HashTable = require('./HashTable');

function anagramGrouping(words) {
    const hastTable = new HashTable();

    for (const word of words) {
        const sortedChars = word.split('').sort().join('');

        if (hastTable.get(sortedChars)) {
            hastTable.get(sortedChars).push(word);
        } else {
            hastTable.set(sortedChars, [word]);
        }
    }
    return hastTable.getValues();
}

module.exports = anagramGrouping;
