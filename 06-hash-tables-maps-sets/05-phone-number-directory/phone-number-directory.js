function phoneNumberDirectory(phoneNumbers) {
    let phoneMap = new Map();





    phoneNumbers.forEach(element => {
        let splitEl = element.split(':');
        //console.log(splitEl[0]);

        const names = splitEl[0];
        const numbers = splitEl[1];

        phoneMap.set(names, numbers);
    });

    console.log(phoneMap);

    return phoneMap;

}

module.exports = phoneNumberDirectory;
