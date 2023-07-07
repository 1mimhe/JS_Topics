
// CommonJS Module
// require = see that we declare whatever we want to use.
const { Class1, Class2, publicly } = require('./Module_CommonJS');

Class1.method1();
Class2.method2();
console.log(publicly);

// ES6 Module
import {ClassES} from "./Module_ES6.js"; // doesn't work!!!

const x = new ClassES();
x.methodE();