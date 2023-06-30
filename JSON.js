// JSON is purely a string with a specified data format (any data types)
// it contains only properties, no methods.

// strings in JSON => "just in double quote, not single quote."

// using node.js for reading from file
const dataJson = require('./JSONFile.json');
console.log(typeof dataJson);
console.log(dataJson);

// using Request class for reading from server

// code doesn't word :/
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const request = new Request(requestURL);

const response = fetch(request);
const superHeroesText = response.text();

const superHeroes = JSON.parse(superHeroesText);
console.log(superHeroes);