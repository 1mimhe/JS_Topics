const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

// Promise: An object that is used as a placeholder for the future
// result of an asynchronous operation. => EX: response from AJAX call

// Instead of nesting callbacks, we can chain promises for
// a sequence of asynchronous operations: escaping callback hell.

// The Promise Lifecycle:
// Pending ==AsyncTask==> Settled
// Pending: Before the future value is available.
// Settled: Asynchronous task has finished.
// Settled => Fulfilled/Rejected
// Fulfilled: Success! The value is available.
// Rejected: An error happened.

// Build Promise [fetch API returns promise] => Consume Promise [Use the promise]

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json()) // json => returns the data we requested => Type: Promise
        .then(data => renderCountry(data[0]));
};
// then(), json() => Promise class
// type of response object => Response
// getCountryData('usa');

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// Chaining Promises + Error Handling
const getCountryAndNeighbour = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response);

            if (!response.ok) // 404 error handling
                throw new Error(`Country not found (${response.status})`);

            return response.json();
        })
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        }) // we must return the Promise, because we don't want call then() in another then() => no callback hell
        .then(response => {
            if (!response.ok) // 404 error handling
                throw new Error(`Country not found (${response.status})`);

            return response.json();
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(err => { // for all errors and chaining levels (or we can use 2nd argument of then() for error handling)
            console.error(`${err} 💥💥💥`);
            alert(`${err} 💥💥💥`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
getCountryAndNeighbour('canada');

// Build Promise
const lotteryPromise =
                            new Promise(function (resolve, reject) { //this function called => executor
    if (Math.random() >= 0.5)
        resolve('You WIN'); // argument => result of fulfilled state => then handler
    else
        reject('You LOSE'); // argument => result of rejected state => error message => catch handler
});

// Consume Promises with Async_Await (ES6)
// async function => this function will be running in background.
// await => return value of the Promise

const getInfCountry = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); // returns a Response
        if (!res.ok) throw new Error('Problem getting country data');

        const data = await res.json(); // the data we want
        return data[0];
    } catch (e) {
        console.error(e.message);

        throw e; // rethrow error
    }
}
getInfCountry('usa').then(data => console.log(data))
    .catch(e => console.log(e.message))
    .finally(() => console.log('3'));
// async/await implicitly returns a promise. (fulfilled as default)
// if there's no return => Promise { undefined } is returned.

// Running Promises in Parallel => Promise.all([array of promises])
const get3Countries = async function (c1, c2, c3) {
    try {
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
        ]);
        return data.map(d => d[0].capital[0]);
    } catch (err) {
        console.error(err);
    }
};
get3Countries('portugal', 'canada', 'tanzania')
    .then(ret => console.log(ret));