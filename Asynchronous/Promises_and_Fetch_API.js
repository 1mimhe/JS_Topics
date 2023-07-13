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