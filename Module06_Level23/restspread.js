// rest operator en split operator

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and
// gathers the rest of the list of arguments into an array.

// When ... occurs in a function call or alike, it’s called a “spread operator”
//  and expands an array into a list.

// rest operator: maakt een array van de losse eenheden

const optellen = function (...numbers) {
  return numbers.reduce((prev, current) => prev + current
  );
}

console.log(optellen(12, 42, 32)); // 86

// spread operator: spreidt de array uit en maakt er losse eenheden van
//(het omgekeerde van de rest operator dus)

const optellen2 = function (x, y) {
  // 1,2
  return x + y;
}

let nums = [1, 2];

//hieronder gebruik ik de spread operator om losse eenheden van de array te maken wanneer
//ik de functie aanroep
console.log(optellen2(...nums));
