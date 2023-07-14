
// by default, everything we define here is private.
// unless we explicitly export it.

export class ClassES {
    methodE() {
        console.log('methodE');
    }
}

let z = 55;
let b = 38;

// or
export {z as a, b}; // we can change outputs name when we export