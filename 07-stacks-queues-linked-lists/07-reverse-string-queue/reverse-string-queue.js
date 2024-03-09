const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const queue = new Queue();
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        queue.enqueue(str[i]);
    }

    while (!queue.isEmpty()) {
        reversedString += queue.dequeue();
    }

    return reversedString;
};

module.exports = reverseStringWithQueue;
