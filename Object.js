
// Make instance of an object
// 1. Factory Function
function createCircle(radios) {
    return {
        radios,
        draw() {
            console.log('draw');
        }
    };
}
// 2. Constructor Function(same as Constructor())
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const circle = createCircle(1);
const circle2 = new Circle(2);

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

delete obj.str;
console.log("a" in obj); // false

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
