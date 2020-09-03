let randomNumber = Math.floor(Math.random() * 1);
let name = prompt("Welkom! Wat is je naam?"); 
alert(`Hey ${name}!`);
let userGuess = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
if (userGuess == randomNumber) {
    alert(`Gefeliciteerd! Het juiste getal was inderdaad ${randomNumber}`) 
    alert('Tot ziens en tot een volgende keer!')}
else if (userGuess != randomNumber) {alert(`Helaas, dat was niet het juiste nummer`)
let userGuess = prompt("Voer opnieuw een nummer in tussen de 0 en 25")};

// Klopt nog niet helemaal, zorg ik ervoor dat hij bij een fout nummer verder gaat?