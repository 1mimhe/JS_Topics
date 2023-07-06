
// Function Declaration
function calcAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// Function Expression (Anonymous)
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

// Function Expression (Named)
const calcAge3 = function caclAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// Arrow Function
const f1 = () => 0;

const f2 = param => param * 2; // returns param * 2

const f3 = (param1, paramN) => param1 * paramN; // returns param1 * paramN

const f4 = () => {
    // statements
}

const f5_wrong = () => {};
console.log(f5_wrong()); // logs undefined: This is because JavaScript only sees
                    // the arrow function as having a concise body
                    // if the token following the arrow is not a left brace.
// so...
const f5 = () => ({});
console.log(f5()); // logs {}