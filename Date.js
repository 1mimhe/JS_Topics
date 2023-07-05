
// Now
const now = new Date();
console.log(now);

// different types
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date("2019-11-18T21:31:17.178Z")); // ISO
console.log(new Date(2037, 10, 19, 15, 23, 5));
// month is 0 based. => 0...11

// Persian Date
const persianNow = new Date().toLocaleString("fa-IR-u-nu-latn");
console.log(persianNow);

// Operations With Dates
const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days); // 10