import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.querySelector("#puzzle");
const guessesLeftEl = document.querySelector("#guessesLeft");
const guessesUsedEl = document.querySelector("#guessesUsed");
let game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render(guess);
});

const render = (guess = null) => {
  puzzleEl.innerHTML = "";
  guessesLeftEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });

  if (guess !== null) {
    const guessEl = document.createElement("span");
    guessEl.textContent = guess;
    guessesUsedEl.appendChild(guessEl);
  }
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  game1 = new Hangman(puzzle, 5);
  guessesUsedEl.innerHTML = "";
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
