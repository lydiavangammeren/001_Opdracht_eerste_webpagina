const { expect } = require("@jest/globals");
const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./password-verifier");

// Testen van de helper functies (condities)

// test("hasRightLength", () => {
//     expect(hasRightLength("123456789")).toBe(false);
// })

// test("hasRightLength", () => {
//     expect(hasRightLength(null)).toBe(false);
// })

// test("hasRightLength", () => {
//     expect(hasRightLength("0")).toBe(true);
// })

// test("hasRightLength, null", () => {
//     expect(hasRightLength(null)).toBe(false);
// })

// test("is not null", () => {
//     expect(isNotNull(null)).toBe(false);
// })

// // Beetje flauwe test :D
// test("is not null", () => {
//     expect(isNotNull("null")).toBe(true);
// })

// test("hasUpperCaseCharacter", () => {
//     expect(hasUpperCaseCharacter("123456789")).toBe(false);
// })


// test("hasUpperCaseCharacter", () => {
//     expect(hasUpperCaseCharacter("ditiseenwoordMEThoofdletters")).toBe(true);
// })

// test("hasLowerCaseCharacter", () => {
//     expect(hasLowerCaseCharacter("ALLLLLCAPS")).toBe(false);
// })

// test("hasLowerCaseCharacter", () => {
//     expect(hasLowerCaseCharacter("AAAHk3")).toBe(true);
// })

// test("has digit", () => {
//     expect(hasDigit("AAAAAHnn6nnn")).toBe(true);
// })

// test("has digit", () => {
//     expect(hasDigit("")).toBe(false);
// })

// test("has digit", () => {
//     expect(hasDigit(6)).toBe(true);
// })

// Testen van de minimumConditionsReached functie

// test("minimumConditionsReached, all conditions false", () => {
//     const conditions = [false, false, false, false, false];
//     expect(minimumConditionsReached(conditions)).toBe(false);
// });

// test("minimumConditionsReached, all conditions true", () => {
//     const conditions = [true, true, true, true, true];
//     expect(minimumConditionsReached(conditions)).toBe(true);
// });

// test("minimumConditionsReached, all conditions false", () => {
//     const conditions = [false, false, false, false, false];
//     expect(minimumConditionsReached(conditions)).toBe(false);
// });

// test("minimumConditionsReached, three conditions minimum", () => {
//     const conditions = [true, false, true, false, true];
//     expect(minimumConditionsReached(conditions)).toBe(true);
// });

// test("minimumConditionsReached, less than minimum true", () => {
//     const conditions = [false, true, true, false, false];
//     expect(minimumConditionsReached(conditions)).toBe(false);
// });
// test("minimumConditionsReached, more than minimum true", () => {
//     const conditions = [true, true, true, false, true];
//     expect(minimumConditionsReached(conditions)).toBe(true);
// });

// Testen van de VerifyPassword functie
// Eerst testen met een simpel voorbeeld van elke voorwaarde,
// Dan testen met de voorbeeld passwords die in de opdracht zijn gegeven

// test("verify the henkie1234 password", () => {
//     expect(verifyPassword("henkie1234")).toBe(true);
// })

// test("verify the empty string password", () => {
//     expect(verifyPassword("")).toBe(false);
// })

test("verify the henkie1 password", () => {
    expect(verifyPassword("henkie1")).toBe(true);
})

// test("verify l string password", () => {
//     expect(verifyPassword("l")).toBe(true);
// })
