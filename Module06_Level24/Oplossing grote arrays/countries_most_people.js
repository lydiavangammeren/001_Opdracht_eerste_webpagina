// Countries_most_people Stap 1 Nodig voor countries_most_people.js.
// Deze functie heeft personData als parameter.
// Binnen de function body wordt de variable countries gedefinieerd als een leeg object
// Vervolgens wordt over de personData heengegaan met de forEach(). De parameter die
// forEach mee krijgt is de region key binnen het 'personobject'. Als deze region in
// het countries object zit wordt er een persoon bij de countries opgeteld.
// Als deze region niet in het countries object zit wordt het aantal personen in dit
// country bij deze op 1 gezet
// 
// De rest van de uitleg over deze functie kun je binnen de functie vinden :)
//

const getCountriesWithAmountOfPeople = personData => {
    // A large part of this function could be a big reduce call.
  
    let countries = {};
    // Count amount of people per country
    // Unpack immediately
    personData.forEach(({ region }) => {
      if (region in countries) {
        countries[region]++;
      } else {
        countries[region] = 1;
      }
    });
  
// So now we have an object with keys country and values amount of people.
// (Gebruik
// console.log(countries)
//  om dit te bekijken in de console)
//
// Vervolgens:  Convert into array of objects with country name and amount of people,
// so we can sort.
// Dat doe je met de Object.entries() method:
// the Object.entries() method returns an array of a given object's 
// own enumerable string-keyed property [key, value] pairs,
// in the same order as that provided by a for...in loop.
// (The only important difference is that
// a for...in loop enumerates properties in the prototype chain as well). 
    
    countries = Object.entries(countries);
// Gebruik weer
// console.log(countries)
// om te zien dat countries nu bestaat 
// uit een array met 36 kleine arrays
// Dit is ook verhelderend: console.log(Array.isArray(countries))
// Daarna ga je countries weer herdefinieren: 
    countries = countries.map(country => ({
      country: country[0],
      inhabitants: country[1],
    }));
// Wat je hierboven hebt gedaan is: je ben met map over countries heengegaan
// en hebt door middel van een anonieme functie een nieuwe array gemaakt die 
// bestaat uit allemaal objecten met 2 key-value pairs. 
// Deze nieuwe array wordt vervolgens toegewezen aan de variable 'countries'
// Om dit te checken kun je weer
//console.log(countries)
// doen. 
// Handig: comment nu alledrie de console.logs in, dan heb je een goed overzicht
// van hoe 'countries' steeds van vorm veranderd is
// Volgende stap is om deze array van 'country-objecten' te sorteren met het
// country-object met het hoogste aantal inhabitants bovenaan
// Dit gebeurt door de sort method toe te passen op de countries array
    // Sort by most populous
    countries.sort((country1, country2) =>
      sort_helper(country1.inhabitants < country2.inhabitants)
    );
    return countries;
  };
  
// Countries_most_people Stap 2a Nodig voor countries_most_people.js.
// Deze functie heeft als parameter een object met 2 keys
// Unpack immediately
  const generateCountryAndInhabitantsHTML = ({ country, inhabitants }) => {
    const li = document.createElement("li");
    li.innerHTML = `${country} - ${inhabitants}`;
    return li;
  };



// Countries_most_people Stap 2c Nodig voor countries_most_people.js.
  const displayCountriesSortedByPeople = () =>
    getCountriesWithAmountOfPeople(randomPersonData)
      .map(generateCountryAndInhabitantsHTML)
      .forEach(addToResultList);

// Countries_most_people Stap 3 Nodig voor countries_most_people.js.
  document
    .querySelector(".countries_most_people")
    .addEventListener("click", displayCountriesSortedByPeople);