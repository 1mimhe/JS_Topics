// A function has access to the variable environment(VE) of
// the execution context(*) in which was created(**).
// * birthplace, parent function, outer scope.
// ** where assigned.

// VE attached to the function, exactly as
// it was as the time the function was created.

// we can not explicitly access closed over variable.
// because closures are not like objects!

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// 'add' functions will be executed without problem, because of closure:)