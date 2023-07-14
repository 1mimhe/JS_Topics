// JSON is purely a string with a specified data format (any data types)
// it contains only properties, no methods.

// strings in JSON => "just in double quote, not single quote."

// using node.js for reading from file
const dataJson = require('./JSONFile.json');
console.log(typeof dataJson);
console.log(dataJson);

// using fetch API for reading from server
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const data = getJSON(requestURL).then(data => console.log(data));

// JSON.parse(): string => object
const obj = JSON.parse('{a: 3}');
console.log(obj);