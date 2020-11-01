const [
  pickRandomWordFromList,
  generateWordWithUnguessedLetters,
  isGameWon,
  updateLivesLeft,
  addLetterToWrongLettersList,
  isWordGuessed,
  
  ] = require("./script.js");

// 1. test pickRandomWordFromList
test("pickRandomWordFromList function should return a (random) word from an array of words", () => {
  const wordList = ["yoghurt", "lijnzaad", "cracker", "rucola"];
  expect(pickRandomWordFromList(wordList)).not.toBeUndefined();
  expect(pickRandomWordFromList(wordList)).not.toBeNull();
  expect(pickRandomWordFromList(wordList)).not.toBeFalsy();
  expect(typeof pickRandomWordFromList(wordList)).toBe("string");
});

// 2. test generateWordWithUnguessedLetters

test("generateWordWithUnguessedLetters function should check if a letter is one of the letters from the guessword and then generate the guessword with the unguessed letters",
 () => {

  expect(generateWordWithUnguessedLetters(['d', 'a', 'k'] ,['d'] )).toStrictEqual(['d', '_', '_']);
  expect(generateWordWithUnguessedLetters(['d', 'a', 'k'] ,['a'] )).toStrictEqual(['_', 'a', '_']);
  expect(generateWordWithUnguessedLetters(['d', 'a', 'k'] ,['x'] )).toStrictEqual(['_', '_', '_']);
  });

// // 3. test updateLivesLeft

 test("updateLivesLeft function should update the number of lives a user has left. A wrong try means one less life",
 () => {
  expect(updateLivesLeft(5)).toStrictEqual(0);
   expect(updateLivesLeft(0)).toStrictEqual(5);
  expect(updateLivesLeft(3)).toStrictEqual(2);
});

// 4. test addLetterToGuessedLettersList

test("addLetterToWrongLettersList function should add wrong letter that the user inputs to wrongletterslist", () => {
    expect(addLetterToWrongLettersList(["v", "i", "s"], ["b"])).toStrictEqual(["b"]);
    expect(addLetterToWrongLettersList(["v", "i", "s"], ["i"])).toStrictEqual([]);

  });

// //test isGameWon: get won, lost or undecided

test("isGameWon should return true when user has guessed all letters of chosen word, false when user has not guessed word and the max amount of wrong guesses has been reached. It returns undefined when the game is still undecided ", () => {
  expect(isGameWon(["b", "e", "d"], ["b", "e", "d"], 0)).toBe(true);
  expect(isGameWon(["b", "e", "d"], ["b", "e", "s", "d"], 1)).toBe(true);
  expect(isGameWon(["b", "e", "d"], ["b", "x", "d"], 1)).toBe(undefined);
  expect(isGameWon(["b", "e", "d"], ["x", "e", "b", "a", "p", "z", "n"], 5)).toBe(false);
});

// test isWordGuessed
  test("isWordGuessed should return true when user has guessed all letters of chosen word", () => {
    expect(isWordGuessed(["b", "e", "d"], ["b", "e", "d"] )).toEqual(true);
    expect(isWordGuessed(["b", "e", "d"], ["d", "e", "x", "b"] )).toEqual(true);
    expect(isWordGuessed(["b", "e", "d"], ["b", "e", "x"] )).toEqual(false);
    expect(isWordGuessed(["b", "e", "d"], ["b", "e"] )).toEqual(false);
    expect(isWordGuessed(["b", "e", "d"], [""] )).toEqual(false);
  });


