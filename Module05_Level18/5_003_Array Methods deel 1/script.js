//A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen.
// Gebruik de .push method.

const addTheWordCool = function(array){
 array.push('çool');
 return array;    
}
//console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

const array2 = ["nice", "awesome", "tof"];
array2.push('cool');
//console.log(array2);

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = function(array){
    return array.length
}

//console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

//C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. 
//PS: Bij welk cijfer begint een array ook alweer met tellen?

const firstElementInArray = function(array){
    return array[0]
}

//console.log(firstElementInArray(['appels', 'peren', 'citroenen'])); 
// appels

//D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

const lastElementInArray = function(array) {
    return array[array.length-1];
}
//console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  return array.slice(1)

  }
  const impeachTrumpSplice = function(array) {
 return array.splice(1, 3)
 }
  
  //console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  //console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  //F Write a simple JavaScript program to join all elements of the following array 
  //into a string (with spaces).
  //ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit
  //over welke array method je gaat gebruiken.

  //const stringsTogether = function(array) {
  //    return array.join(" ");
  // }
  //console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

//  G Schrijf een functie die 2 arrays ['array 1'] ['array2']
//   combineert tot 1 array ['array1', 'array2']

const combineTwoArrays = function(array1, array2) {
    return array1.concat(array2);
}

console.log(combineTwoArrays([1,2,3], [4,5,6]));
 // resultaat: [1,2,3,4,5,6]