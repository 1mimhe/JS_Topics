// In import, we use the same name as export
// what we import/export, is not a copy. It's reference.

// CommonJS Module => NodeJS
// require = see that we declare whatever we want to use.
const { Class1, Class2, publicly } = require('./Module_CommonJS');

Class1.method1();
Class2.method2();
console.log(publicly);

// ES6 Module
// we must add *type="module"* in <script> tag in our html code
// import => be hoisted
import {
        ClassES,
        a,
        b as c // we can change inputs name
        } from "./Module_ES6.js";
// also we can import everything we export, as an object => type: Module
import * as EveryThing from "./Module_ES6.js";

const x = new ClassES();
x.methodE();
console.log(a, c);

console.log(EveryThing);