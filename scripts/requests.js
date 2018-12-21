// Using async/await
const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch the puzzle");
  }
};

// Using Fetch with Promises
// const getPuzzle = wordCount => {
//   return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch the puzzle");
//       }
//     })
//     .then(data => {
//       return data.puzzle;
//     });
// };

// Using promises
// const getPuzzle = wordCount =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject("An error has occured");
//       }
//     });

//     request.open("GET", `//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });

// Using callbacks
// const getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       callback(undefined, data.puzzle);
//     } else if (e.target.readyState === 4) {
//       callback("An error has occured", undefined);
//     }
//   });

//   request.open("GET", `//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };

// Using async/await
const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=1a11bd55cc8f9c");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch the data");
  }
};

// Using async/await
const getCountry = async countryCode => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch the data");
  }
};

// Using Fetch with Promises
// const getCountry = countryCode => {
//   return fetch("https://restcountries.eu/rest/v2/all", {})
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch the data");
//       }
//     })
//     .then(data => {
//       return data.find(country => country.alpha2Code === countryCode);
//     });
// };

// Using promises
// const getCountry = countryCode =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener("readystatechange", e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           country => country.alpha2Code === countryCode
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject("Unable to fetch data");
//       }
//     });

//     countryRequest.open("GET", "https://restcountries.eu/rest/v2/all");
//     countryRequest.send();
//   });

// Using callbacks
// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest();

//   countryRequest.addEventListener("readystatechange", e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const country = data.find(country => country.alpha2Code === countryCode);
//       callback(undefined, country);
//     } else if (e.target.readyState === 4) {
//       callback("Unable to fetch data");
//     }
//   });

//   countryRequest.open("GET", "https://restcountries.eu/rest/v2/all");
//   countryRequest.send();
// };
