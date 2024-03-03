let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".lastGuess");
const remGuesses = document.querySelector(".remGuess");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".lower");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter the number between 1 and 100 only");
  } else {
    prevGuess.push(guess);
    if (numGuesses >= 9) {
      displayGuess(guess);
      displayMessage(
        `Game Over, The Random number to be guessed was ${randomNumber}`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You have guessed it right 🤯🥳`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low 🙄`);
  } else {
    displayMessage(`Number is too high 🙄`);
  }
}

function displayGuess(guess) {
  //cleanUp
  userInput.value = "";
  prevGuesses.innerHTML += ` ${guess}`;
  numGuesses++;
  remGuesses.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 0;
    prevGuesses.innerHTML = "";
    remGuesses.innerHTML = 10;
    userInput.removeAttribute("disabled");
    startOver.removeChild("p");
    // lowOrHi.innerHTML = "";
    playGame = true;
  });
}
