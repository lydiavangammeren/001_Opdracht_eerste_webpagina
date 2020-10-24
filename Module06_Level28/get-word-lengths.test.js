const getWordLengths = require("./get-word-lengths.js");

test("Get word lengths", function() {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = getWordLengths(words);
  expect(output).toEqual(expected);
});