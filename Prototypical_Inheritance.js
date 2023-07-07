// Prototypical Inheritance

// Intermediate Function Inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); // Prototypical Inheritance
    // Child.prototype.constructor => [Function: Parent]
    Child.prototype.constructor = Child; // Resetting Constructor
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate ' + this.color);
}

function Circle(radius, color) {
    Shape.call(this, color); // Calling Super Constructor
    this.radius = radius;
}

extend(Circle, Shape);

// Method Overriding: prototype chain => pick first implementation when we call duplicate()
Circle.prototype.duplicate = function () {
    console.log('duplicate Circle');
};

// if we want to call the implementation on the parent object
let c = new Circle(1, 'red');
Shape.prototype.duplicate.call(c); // duplicate red
// or
c.__proto__.__proto__.duplicate.call(c);

// Polymorphism
function Square(size, color) {
    Shape.call(this, color); // Calling Super Constructor
    this.siza = size;
}

extend(Square, Shape);
Shape.prototype.duplicate = function () {
    console.log('duplicate Square');
};

const shapes = [
    new Circle(),
    new Square()
];

for (const shape of shapes) {
    shape.duplicate();
}
// duplicate Circle
// duplicate Square