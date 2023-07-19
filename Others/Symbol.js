const sym = Symbol("foo");

// for: string => symbol
// keyFor: symbol => string
console.log(Symbol.keyFor(Symbol.for("tokenString")) === "tokenString");

console.log(Object(sym) == sym); // returns true.

// Symbol wrapper objects as property keys
const obj = { [sym]: 1 };
console.log(obj[sym]); // 1
console.log(obj[Object(sym)]); // still 1