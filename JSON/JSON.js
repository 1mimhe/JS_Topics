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
const data = getJSON(requestURL).then(data => console.log('response: ' + data));

// JSON.parse(): JSON string => object
const obj = JSON.parse('{"a": 3}');
console.log(obj);

// JSON.stringify(): the value => JSON string
console.log(JSON.stringify({ x: 5, y: 6 })); // "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// "[3,"false",false]"

// undefined, Function, and Symbol values are not valid JSON values. they are either omitted.
console.log(JSON.stringify({ x: [10, undefined, function a(){console.log('a')}, Symbol('b')] }));
// "{"x":[10,null,null,null]}"

// The numbers Infinity and NaN => null. but not omitted.
console.log(JSON.stringify([Infinity, NaN])); // [null,null]

// array elements are not enumerable and make no sense in JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

// toJSON()
JSON.stringify({
    x: 5,
    y: 6,
    toJSON() {
        return this.x + this.y;
    },
});
// '11'

// replacer=> 2nd parameter of .stringify()
function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}

const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
};
JSON.stringify(foo, replacer); // '{"week":45,"month":7}'
// replacer can be an array.
JSON.stringify(foo, ["week", "month"]); // '{"week":45,"month":7}', only keep "week" and "month" properties'