// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

// Function to fetch data from a single API
function fetchData(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Error fetching data from ${apiUrl}: ${error}`);
      return null;
    });
}

// Function to measure the time taken for a promise to resolve
function measureTime(promise) {
  const startTime = performance.now();
  return promise
    .then(() => performance.now() - startTime)
    .catch((error) => {
      console.error(`Error: ${error}`);
      return null;
    });
}

// Use Promise.all to fetch data from all APIs and measure the time taken
const promiseAllStartTime = performance.now();
Promise.all(apiUrls.map(fetchData))
  .then(() => {
    const promiseAllTime = performance.now() - promiseAllStartTime;
    document.getElementById("output-all").textContent = promiseAllTime.toFixed(2) + " ms";
  })
  .catch((error) => console.error(`Promise.all Error: ${error}`));

// Use Promise.any to fetch data from any API and measure the time taken
const promiseAnyStartTime = performance.now();
Promise.any(apiUrls.map(fetchData))
  .then(() => {
    const promiseAnyTime = performance.now() - promiseAnyStartTime;
    document.getElementById("output-any").textContent = promiseAnyTime.toFixed(2) + " ms";
  })
  .catch((error) => console.error(`Promise.any Error: ${error}`));

















