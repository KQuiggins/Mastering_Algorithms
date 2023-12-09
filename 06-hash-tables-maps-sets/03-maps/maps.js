const { log, error } = require('console');

const newMap = new Map([
    [1, 'John'],
    [2, 'Jack'],
    [3, 'Jill']
]);

console.log(newMap);

const myFunction = () => {};
const myObj = {};

const newMap2 = new Map([
    ['name', 'John'],
    [1, 'number one'],
    [true, 'really true'],
    [null, 'null'],
    [myFunction, 'my Function'],
    [myObj, 'my object'],
]);

// Get Values
// console.log(newMap.get(1));
// console.log(newMap2.get(myObj));
// console.log(newMap2.get(myFunction));

// Set Values
newMap.set(4, 'Mike');
newMap.set(5, 'Kenny');
console.log(newMap.has(1));
console.log(newMap.has(10));

// remove values
newMap.delete(1);
console.log(newMap.has(1));

// Get size
console.log(newMap.size);

// Iterating over a map
for (const [key, value] of newMap) {
    console.log(key, value);
}

newMap.forEach((value, key) => console.log(key, value))

// Get keys

log(newMap.keys());

// Get values

log(newMap.values());

// Clear map

log(newMap.clear());

log(newMap.size);