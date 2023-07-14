//  The prototype is itself an object,
//  so the prototype will have its own prototype,
//  making what's called a prototype chain.
//  The chain ends when we reach a prototype that has null for its own prototype.

// access an object's prototype
let obj = {};
console.log(Object.getPrototypeOf(obj)); // or => obj.__proto__

// When you try to access a property of an object:
// if the property can't be found in the object itself,
// the prototype is searched for the property.
// If the property still can't be found,
// then the prototype's prototype is searched,
// and so on until either the property is found,
// or the end of the chain is reached, in which case undefined is returned.

// prototype chain:
let object = new Date();

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);
// Date.prototype
// Object { }
// null

// Setting a prototype
const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

// 1. Object.create()
const carl = Object.create(personPrototype);
carl.greet(); // hello!
console.log(personPrototype, carl); // { greet: [Function: greet] } {}

// 2. Using a constructor
// all functions have a property named prototype
// Constructor.prototype => this object will be used as prototype for all objects created by this constructor.
// console.log(Person.prototype === (new Person()).__proto__); // true
function Person(name) {
    // *Own members*
    this.name = name;
}

// *Prototype members*
Object.assign(Person.prototype, personPrototype); // prototype => { greet: [Function: greet] }
// or
// Person.prototype.greet = personPrototype.greet;

const personPrototype2 = {
    puo() {
        console.log("hello!");
    },
};
Object.assign(Person.prototype, personPrototype2); // prototype => { greet: [Function: greet], puo: [Function: puo] }

// prototype's members are not enumerable.
// Object.keys() just returns own members.
console.log(Object.keys(new Person())); // [ 'name' ]
// but for-in loop returns all members (own + property)
for (const key in (new Person())) console.log(key); // name greet puo