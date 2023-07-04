// 'this' in a method
let user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name); // 'this' is the current object
    }
};

let admin = {name: "Admin"};

function sayHi2() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi2;
admin.f = sayHi2;

// these calls have different this
// 'this' inside the function is the object before the dot
user.f(); // John  (this => user)
admin.f(); // Admin  (this => admin)

// Calling without an object: this == undefined
function sayHi3() {
    console.log(this);
}

sayHi3();
// non-strict mode => global object
// strict mode => undefined

// 'this' in arrow function => taken from the outer normal function.
let user2 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user2.sayHi(); // Ilya

// 'this' alone
console.log(this); // global object

// 'this' in constructor function
function MyFunction() {
    this.someKey = 1;
    this.inner = function () {
        console.log(this);
    }
}

const obj = new MyFunction();
obj.inner(); // {someKey: 1, inner: ƒ} with myFunction prototype

// Explicit Binding(Change what 'this' point to) :
// fnc.call(that object we want 'this' point to, arguments of fnc());
// => call object with new this.
// fnc.apply(that object we want 'this' point to, arguments of fnc() as an array);
// => call object with new this. but arguments must be in an array.
// fnc.bind(that object we want 'this' point to, (optional) arguments of fnc());
// => create a new function with a new 'this'.

// Function Borrowing

class Dog {
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }
    tellUsAboutYourSelf() {
        return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
    }

    woof() {
        return "WOOF!!!"
    }
}

class Cat {
    constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
    }

    meow() {
        return "MEOW!!!"
    }
}

let fido = new Dog("Fido", 3, "dachshund");
let sparkles = new Cat("Sparkles", 5, "Siamese")

// we have function borrowing here.

fido.tellUsAboutYourSelf.call(sparkles);
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
fido.tellUsAboutYourSelf.apply(sparkles);
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles)
describeSparkles()
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’