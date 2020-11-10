// Initialize ALL global variables here
let word;
let guessedLetters;
let wrongTries;

//✔
const wordList = [
  "curiosity",
  // self discipline :)
  "selfdiscipline",
  "patience",
  "perseverance",
  "optimism",
];

//✔
const pickRandomWordFromList = (list) => {
  let randomWord = Math.floor(Math.random() * list.length);
  return list[randomWord];
};
//✔
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", updateGameResult);
  document.querySelector(".restart").addEventListener("click", startTheGame);
  startTheGame();
});

//✔
const getUserName = () => {
  let username = prompt("What is your name?");
  alert(`Hi ${username}! We are about to start the game`);
};

//✔
startTheGame = () => {
  //getUserName();

  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
  // The split() method divides a String into an ordered list of substrings,
  // puts these substrings into an array, and returns the array
  word = pickRandomWordFromList(wordList).split("");
  displayChosenWord(word);

  wrongTries = 0;
  updateLivesLeft(wrongTries);

  guessedLetters = [];
  displayWordWithUnguessedLetters(word, guessedLetters);
  displayWrongLettersList(word, guessedLetters);
};

//✔
const isWordGuessed = (lettersOfChosenWord, guessedLetters) => {
  // Op lettersOfChosenWord wordt een filter toegepast waarbij alle letters van het woord die
  // nog niet door de user geraden zijn gereturned worden
  let remainingLetters = lettersOfChosenWord.filter((letter) => {
    return !guessedLetters.includes(letter);
  });
  // remainingLetters is een array van alle letters die nog geraden moeten worden door de user

  // Als er geen remainingLetters meer zijn:

  return remainingLetters.length === 0;
};

//✔
const clearInputField = () => {
  document.querySelector("input").value = "";
};
//✔
const displayWin = () => {
  document.querySelector(".win").style.display = "block";
};
//✔
const displayLose = () => {
  document.querySelector(".lose").style.display = "block";
};
//✔
const displayChosenWord = (word) => {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};
//✔
const updateLivesLeft = (wrongTries) => {
  let maxAmountOfTries = 5;
  maxAmountOfTries -= wrongTries;
  return maxAmountOfTries;
};
//✔
const displayLivesLeft = (wrongTries) => {
  let livesLeft = updateLivesLeft(wrongTries);
  document.querySelector(".lives span").innerHTML = livesLeft;
};

//✔
const addLetterToWrongLettersList = (lettersOfChosenWord, guessedLetters) => {
  let wrongLetters = guessedLetters.filter((letter) => {
    // returns true if the letter is not in the chosenWord
    return !lettersOfChosenWord.includes(letter);
  });
  return wrongLetters;
};
//✔
const displayWrongLettersList = (lettersOfChosenWord, guessedLetters) => {
  let wrongLettersList = addLetterToWrongLettersList(
    lettersOfChosenWord,
    guessedLetters
  );
  document.querySelector(".wrongletters").innerHTML = wrongLettersList.join(
    " "
  );
};
//✔
const generateWordWithUnguessedLetters = (
  lettersOfChosenWord,
  currentGuessLetter
) => {
  // lettersOfChosenWord: ['d', 'a', 'k']
  // currentGuessLetter: ['d']
  let display = lettersOfChosenWord.map((letter) => {
    if (currentGuessLetter.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  // display: ['d', '_', '_']
  return display;
};
//✔
const displayWordWithUnguessedLetters = (
  lettersOfChosenWord,
  currentGuessLetters
) => {
  const wordWithUnguessedLetters = generateWordWithUnguessedLetters(
    lettersOfChosenWord,
    currentGuessLetters
  );
  // (MDN) The join() method creates and returns a new string by concatenating
  // all of the elements in an array (or an array-like object),
  // separated by commas or a specified separator string.
  // If the array has only one item, then that item will be returned without using the separator.
  document.querySelector(".the_word").innerHTML = wordWithUnguessedLetters.join(
    " "
  );
};

const isGameWon = (word, guessedLetters, wrongTries) => {
  if (isWordGuessed(word, guessedLetters) && updateLivesLeft(wrongTries) > 0) {
    return true;
  } else if (updateLivesLeft(wrongTries) === 0) {
    return false;
  }
};

const displayGameOver = (word, guessedLetters, wrongTries) => {
  if (isGameWon(word, guessedLetters, wrongTries) === true) {
    displayWin();
  } else if (isGameWon(word, guessedLetters, wrongTries) === false) {
    displayLose();
  }
};

const updateGameResult = () => {
  const guessLetter = document.querySelector("input").value;
  clearInputField();

  if (guessedLetters.includes(guessLetter) || guessLetter === "") {
    return;
  }

  if (!word.includes(guessLetter) && guessLetter !== "") {
    wrongTries++;
    updateLivesLeft(wrongTries);
    displayLivesLeft(wrongTries);
  }

  guessedLetters.push(guessLetter);

  displayWordWithUnguessedLetters(word, guessedLetters);
  displayWrongLettersList(word, guessedLetters);

  isGameWon(word, guessedLetters, wrongTries);
  displayGameOver(word, guessedLetters, wrongTries);
};

module.exports = {
  pickRandomWordFromList,
  generateWordWithUnguessedLetters,
  isGameWon,
  updateLivesLeft,
  addLetterToWrongLettersList,
  isWordGuessed,
};
