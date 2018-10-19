const strings = `I'm a multiline string 
nobody can stop me 
from breaking lines`;

console.log('are you serious multiline?', strings);

const age = 25; // Yes really
const myAge = `I'm ${age} for real`;

console.log('How old are you old man?', myAge);

function doSomethingBoy(action = 'Come here!!!') {

  return `${action} BOOOOY!`;
}

console.log('default action boy', doSomethingBoy());
console.log('lets change it boy', doSomethingBoy('DO SOMETHING!!!!'));