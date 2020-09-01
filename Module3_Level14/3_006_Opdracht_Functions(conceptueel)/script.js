/*receptBroodjeKaas:
1. pak een broodje
2. smeer boter op het broodje
3. leg een plak kaas op het broodje

*/

let receptBroodjeKaas = function () {
    return('1. pak een broodje 2. smeer boter op het broodje 3. leg een plak kaas op het broodje')
}

console.log(receptBroodjeKaas());

// Hier wordt de functie uitgedrukt
let madeSandwich = function(topping) {
    console.log(`There you go, a sandwich with ${topping}`);
}
// Hier wordt de functie aangeroepen
console.log(madeSandwich('banaan'));
console.log(madeSandwich('hummus'));

let calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(15, 3.40));

let calculateDiscountedOnlyAboveTwentyfive = function(totalAmount, discount) {
 if (totalAmount > 25) {
     return Math.round(totalAmount - discount);
 } else {return totalAmount }
}

console.log(calculateDiscountedOnlyAboveTwentyfive(35, 2.66));
