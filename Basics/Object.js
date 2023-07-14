// Properties
const obj = {
  str: "string",
  "space key": "mio",
  fnc() {
      console.log("function");
  }
};

obj.str = "p";
obj["str"] = "p";

delete obj.str; // 'str' property deleted

// in operator
console.log("a" in obj); // false
console.log("fnc" in obj); // true

// Getter and Setter
const myObj = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8, returned from the get b() method
myObj.c = 50; // Calls the set c(x) method
console.log(myObj.a); // 25

// Inheritance: You can add a property to all objects
//                  created through a certain constructor using the prototype property.
class Car {
    constructor() {
        this.a = 5;
    }
}

const car1 = new Car();
const car2 = new Car();

Car.prototype.color = "red";

console.log(car1.color); // log 'red'
console.log(car2.color); // log 'red'

// Make Instance of A Object:
// 1. Factory Function
function createCircle(radios) {
    return {
        radios,
        draw() {
            console.log('draw');
        }
    }
}
const circle1 = createCircle(1);

// 2. Constructor Function
function Circle(radios) {
    let a = 5; // private property
    let b = function (a) { // private method
        //...
    }

    this.radios = radios;
    this.draw = function () {
        b(a);
        console.log('draw');
    }
}
const circle2 = new Circle(2);

// Define property with Object.defineProperty():
const obj2 = {};
Object.defineProperty(obj2, "PI", {
    value: 3.14, // value of property
    writable: false, // becomes non-writable
    configurable: false, // cannot be deleted
    enumerable: false // will not exist in Object.keys
});
obj2.PI = 5; // Error in strict mode
delete obj2.PI; // Error in strict mode
console.log(obj2.PI); // 3.14
console.log(Object.keys(obj2)); // []

// Cloning an object:
// 1
const another = Object.assign({color: 'red'}, circle1);

// 2
const another2 = {...circle1};

// if we want iteration over objects, we can use these:
console.log(Object.entries(obj)); // [ [ 'space key', 'mio' ], [ 'fnc', [Function: fnc] ] ]
console.log(Object.keys(obj)); // [ 'space key', 'fnc' ]
console.log(Object.values(obj)); // [ 'mio', [Function: fnc] ]

// we can name a property with a variable.
const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const open = {
    [weekdays[4]]: {},
    [`day_${2+4}`]: {}
}; // { wed: {}, day_6: {} }

// Destructuring Assigment
const {a, b} = {x: 1, y: 2}; // a: 1, b: 2