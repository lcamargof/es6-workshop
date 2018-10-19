// ES6 Classes example

// Old way ES5

function MyClass (name) {
  this.name = name;
}

MyClass.prototype.getName = function() {
  return this.name;
};

// Let's try it
const Test = new MyClass('Luis Camargo');

console.log('ES5 Class result', Test.getName());

// New way ES6 and beyond

class MyClassES6 {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const TestES6 = new MyClassES6('Luis Camargo FTW');

console.log('ES6 Class Result', TestES6.getName());

// How do they look?

console.log('/////////////////////');
console.log('ES5 Class', Test);
console.log('ES6 Class', TestES6);