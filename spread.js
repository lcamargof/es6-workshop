// Object destructuring
const myObject = {
  first: 'first',
  second: 'second'
};

const { first } = myObject;

console.log('Result:', first === myObject.first);

// It also works on functions
function testFunc ({ second }) {
  console.log('test func result:', second);
}

testFunc(myObject);

// Spread
const myArray = [1, 2, 3];
const secondArray = [4, 5, 6];

console.log('Join arrays!', [...myArray, ...secondArray]);

// It also works with objects
console.log('Object copy?', { ...myObject, third: 'third' });

// It also helps to keep things immutable
const mutableArray = ['hola', 'como', 'estan'];
const mutableCopy = mutableArray; // Memory reference
const newArray = [...mutableArray];

mutableArray.push(...mutableArray); // This mutates the array

console.log('Original mutable array', mutableArray);
console.log('Mutable copy', mutableCopy); // :o
console.log('immutable, he doesnt care', newArray);