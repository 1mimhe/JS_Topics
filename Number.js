// Base 10 - 0 to 9 # 1/10 = 0.1 # 3/10 = 3.3333333
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
// radix(?): binary, decimal, ...
console.log(Number.parseInt('   30px  ', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// Rounding integers
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23
console.log(Math.floor(-23.3)); // -24

console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(-23.3)); // -23

// Rounding decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log(+(2.345).toFixed(2)); // 2.35

// BigInt
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(915449648956986528495698568965); // number: 9.154496489569866e+29
console.log(915449648956986528495698568965n); // bigint: 915449648956986528495698568965n

// bigint and number calculations do not happen.
console.log(10n + 3n); // 13n
console.log(10n / 3n); // 3n