const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(2);
list.append(3);
list.append(4);
list.prepend(1);

list.insertAt(2, "NEW");

list.printAll();

