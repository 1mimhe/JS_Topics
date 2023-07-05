
let array1 = [1, 2, '3' , {a: 5}, () => 3];
let array2 = [1, 4, 9, 16, 25];

const sliced = array1.slice(1, 3); // [ 2, '3' ]

array1.splice(1, 1, 5, 7); // [ 1, 5, 7, '3', {a: 5}, () => 3 ]

array1.concat(array2);
const concatArray = [...array1, ...array2]; // spread operator

console.log(array1.at(-1)); // 25

const element = array1.find((element) => {
    return element?.a === 5;
}); // element: {a: 5}

array2.forEach(number => console.log(number));

console.log(array2.join('-')); // 1-4-9-16-25

// Sorting arrays
const unsortedArray = [6, 4, 7, 2, 10];
unsortedArray.sort();
unsortedArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

// Testing elements of array
const bool1 = array1.every((value) => {
    return Number.isFinite(value);
}); // false
const bool2 = array1.some((value) => {
    return typeof value === 'object';
}); // true

// Filtering an array
const filtered = array1.filter(value => {
    return value < 6;
}); // [ 1, 5, '3' ]

// Mapping an array
const map1 = array2.map(value=> value * 2); // [ 2, 8, 18, 32, 50 ]
const map2 = array2.map(Math.sqrt); // [ 1, 2, 3, 4, 5 ]

// Reducing an array
const sum = array2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0: initialize accumulator