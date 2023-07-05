
// setTimeout: sets a timer which executes a function or specified piece of code once the timer expires.
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    'olives',
    'spinach'
);
console.log('Waiting...');

if (true) clearTimeout(pizzaTimer);

// setInterval: repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 1000); // timeout: delay