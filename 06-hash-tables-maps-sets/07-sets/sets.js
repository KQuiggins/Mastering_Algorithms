const nameSet = new Set(['John', 'Jane', 'Joe', 'John']);

// Add to set
nameSet.add('Jack');
nameSet.add('Jill');

// Check for values
console.log(nameSet.has('John'));
console.log(nameSet.has('Kenny'));

// Check size
console.log(nameSet.size);

// Get values
console.log(nameSet.values());


// Iterate over set
for (const name of nameSet) {
    console.log(name);
}

// convert to Array
const nameArray = [...nameSet];
console.log(nameArray);

// clear set
nameSet.clear();

console.log(nameSet.size);