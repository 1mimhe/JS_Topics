// ES6
// typeof a class => function
class Shape {
    constructor(color, protoProperty = 5) {
        // Own Members (property + method)s
        this.color = color;
        this.protoProperty = protoProperty;
        this.ownMethod = function () {}
    }
    // Prototype members
    move() {
        console.log('draw');
    }
    protoProperty;

    // Static members:
    // with static methods,
    // we are working with Circle class itself,
    // not working with a particular circle object.
    static parse(str) {
        const color = JSON.parse(str).radius;
        return new Shape(color);
    }
    static staticProperty = "a";
}

const shape = Shape.parse('{ "color": "red" }');
// shape.parse(); // Error
console.log(shape.protoProperty); // 5

// inheritance => easier and cleaner
class Circle extends Shape {
    constructor(radius, color, protoProperty) {
        super(color, protoProperty);
        this.radius = radius;
    }

    // Method Overriding
    move() {
        super.move(); // access base object with super keyword.
        console.log('move Circle');
    }
}

// in class inheritance:
// parent class all properties => child class own properties.
// parent class own methods => child class own methods.
console.log((new Circle(5, 'red', 3)));
// Circle {
//     protoProperty: 3,
//     color: 'red',
//     ownMethod: [Function (anonymous)],
//     radius: 5
// }