const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
    const list = new LinkedList();

    for (let i = str.length - 1; i >= 0; i--) {
        list.add(str[i]);


    }

    let reversedStr = '';

    let current = list.head;

    while(current != null) {
        reversedStr += current.data;
        current = current.next;
    }

    return reversedStr;


}

module.exports = reverseStringLinkedList;
