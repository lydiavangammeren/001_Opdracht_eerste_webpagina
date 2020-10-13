// average_age Stap 1
// Deze functie berekent de gemiddelde leeftijd van een land
// Het heeft 'country' als parameter
// In de function body wordt een variable peopleFromCountry gedefinieerd.
// Bij het maken van deze variable gaat er een filter over randomPersonData heen,
// dat bij elk person-object uit de randomPersonData de region key pakt van die person
// en checkt of die gelijk is aan de de country.
// Zo krijg je uiteindelijk een country-array met personobjecten van de personen
//  uit die country
// De rest van de uitleg zet ik binnen de functie :)
// Using globals here, not that nice.
// We could fix this with a curried function. https://javascript.info/currying-partials
const calculateAverageAgeForCountry = (country) => {
  const peopleFromCountry = randomPersonData.filter(
    (person) => person.region === country
  );
  //console.log(peopleFromCountry)
  // De amountOfPeople variable is een number. Je krijgt het door de length te nemen
  // van de peopleFromCountry array
  const amountOfPeople = peopleFromCountry.length;
  // Is dit stukje hieronder wel nodig? Er zijn toch geen landen met waar 0 mensen
  // vandaan komen?
  // if (amountOfPeople === 0) {
  //   // Don't want to divide by 0.
  //   return 0;
  // }

  // Hier komt een number uit
  const totalAge = peopleFromCountry.reduce(
    (sum, current) => sum + current.age,
    0
  );
  //console.log(totalAge)

  //totalAge gedeeld door amountOfPeople, afgerond op een heel getal
  return Math.round(totalAge / amountOfPeople);
};

// average_age Stap 2c
// Deze functie wordt in Stap 3 aangeroepen
const displayAverageAgeForCountry = () => {
  // Het aanroepen van de emptyResultList() zorgt er hier voor dat
  // wanneer er op de button van een ander land wordt geclickt, de tekst
  // over het eerdere land weer verdwijnt
  // (de innerhtml van de ul met class '.results wordt weer naar een lege string gezet)
  emptyResultList();
  //The target property of the Event interface
  // is a reference to the object onto which the event was dispatched.
  const country = event.target.value;
  //  console.log(country)
  const average_age = calculateAverageAgeForCountry(country);
  const li = document.createElement("li");
  li.innerHTML = `The average age for ${country} is ${average_age}`;
  addToResultList(li);
};

// average_age Stap 3a
// In deze functie wordt een button aangemaakt voor een land.
// Als er op deze button wordt geklikt voert hij de functie 'displayAverageAgeForCountry'
// uit
const getCountryButtonHTML = (country) => {
  const button = document.createElement("input");
  button.type = "button";
  button.value = country;
  button.addEventListener("click", displayAverageAgeForCountry);
  // Hier wordt de button gereturnd, zodat je hem later in de addToButtonList functie
  // kunt appenden aan de sub_buttons (zie utils.js regel 168)
  return button;
};

// average_age Stap 3c
// Als deze functie gecalled wordt zorgt hij ervoor dat de average age buttons in de DOM getoond worden
// In de function body heeft hij een array van landen
// (het resultaat van het aanroepen van de getCountries functie
// met het argument 'randomPersonData')
// Over dat array wordt heengegaan met de mapMethod die een nieuwe array maakt van
// buttons van al die landen
// Tot slot wordt met forEach voor elk van die buttons de functie 'addToButtonList'
// uitgevoerd, wat er op neerkomt dat ze worden toegevoegd aan de .subbuttons ul
const displayAverageAgeButtons = () =>
  getCountries(randomPersonData)
    .map(getCountryButtonHTML)
    .forEach(addToButtonList);


// average_age Stap 4
// Hieronder wordt de button met de class 'average_age' geselecteerd
// en wordt er een Eventlistener aan toe gevoegd. 
// Als er geklikt wordt op de button wordt de displayAverageAgeButtons
// functie aangeroepen, en komen alle landen-subbuttons tevoorschijn    
document
  .querySelector(".average_age")
  .addEventListener("click", displayAverageAgeButtons);


