const { LinkedList } = require('./linked-list');

const list = new LinkedList();


list.add(100);
list.add(200);
list.add(300);
list.add(400);

list.insertAt(1, 'ken');
//list.removeFrom(1);

//console.log(list.get(2));

list.printAll();
