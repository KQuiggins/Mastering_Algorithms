const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.prepend(400);

list.insertAt(2, "NEW");

// console.log(list.get(2).data);
//list.remove(2)

console.log(list.contains(200));
console.log(list.contains(500));


// list.printAll();

