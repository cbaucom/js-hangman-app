const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// Calling getPuzzle with callback
// getPuzzle("1", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// Calling getPuzzle with promises
// getPuzzle("1").then(
//   puzzle => {
//     console.log(puzzle);
//   },
//   err => {
//     console.log(`Error: ${err}`);
//   }
// );

// getPuzzle("1")
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// Calling getCountry with callback
// getCountry("US", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(`Country name: ${country.name}`);
//   }
// });

// Calling getCountry with promises
// getCountry("US").then(
//   country => {
//     console.log(country.name);
//   },
//   err => {
//     console.log(`Error: ${err}`);
//   }
// );

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then(location => {
//     return getCountry(location.country);
//   })
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getCountry("US")
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// fetch("http://puzzle.mead.io/puzzle", {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(err => {
//     console.log(err);
//   });
