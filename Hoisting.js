//--------------------------------------------------------------------------------------------//
// Hoisting: The interpreter appears to move the declaration of functions,
//                  variables or classes to the top of their scope.

// 1. Var
console.log(a) // We can use it, but its value is undefined.
a = 3;
console.log(a) // log 3
{var a = 5} // In another scope.
console.log(a) // log 5.

// 2. function declaration
fnc()
function fnc() {
    console.log("Hoisting.")
}


// No-Hoisting

// 1. let, const
console.log(g) // ReferenceError
let g = 5

// 2. Class
let cls = new MyClass(); // ReferenceError
class MyClass {
    MyMethod() {
    }
}
//--------------------------------------------------------------------------------------------//