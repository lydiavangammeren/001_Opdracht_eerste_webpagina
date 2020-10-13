// Capricorn_women Stap 2 Nodig voor capricorn_women.js
// Deze functie moet je gedefinieerd hebben voordat je de getCapricornWomen(stap 1)
// gaat uitvoeren
const isWoman = person => person.gender === "female";

// Capricorn_women Stap 3 Nodig voor capricorn_women.js
// Deze functie moet je gedefinieerd hebben voordat je de getCapricornWomen(stap 1)
// gaat uitvoeren
const isOver30 = person => person.age > 30;

// capricorn_women Stap 6. 
// Deze functie moet je gedefinieerd hebben voordat je de getCapricornWomen(stap 1)
// gaat uitvoeren
// deze constante heeft een anonieme functie die person als parameter heeft. In de getCapricornWomen
// functie heb je een array met personData. De parameter person haalt daar zijn argument
// vandaan. Het argument is een 'personobject". In de addStarSign function hebben de
// 'personobjects' al een 'sign' key meegekregen, vandaar dat in deze anonieme functie de
// gecheckt kan worden of person.sign gelijk is aan "CAPRICORN"
// Uiteindelijk geeft de functie een boolean terug en kan
// de variable isCapricorn dus true of false zijn
const isCapricorn = person => person.sign === "CAPRICORN";

// capricorn_women Stap 8 
// Deze functie heeft person 1 en person 2 als parameters
// In de function body wordt de sort_helper functie aangeroepen met person1.name > person2.name
// als parameter. Deze functie returnt een -1 of 1 
const sortByName = (person1, person2) =>
  sort_helper(person1.name > person2.name);

//  Capricorn_women Stap 1 Nodig voor capricorn_women.js.
//  Eerst wil je de capricorn vrouwen 'in je handje krijgen'
// voordat je er iets mee kunt doen (zoals ze in de DOM zetten)
// De getCapricornWomen functie krijgt als parameter een array mee van personen
// In de function body wordt over deze array heengegaan met de filter method.
// De eerste filtermethod maakt een nieuwe array met enkel vrouwen
// De tweede filtermethod maakt van die array weer een nieuwe array met enkel vrouwen > 30
// Vervolgens wordt met de map() method bij elk van de elementen uit de array van vrouwen >30
// de addStarSign aangeroepen. Deze functie geeft aan een element de key 'sign' mee met een
// bepaald sterrenbeeld als value.
// De map() method maakt dan een nieuwe array met de resultaten van het aanroepen van de 
// addStarSign functie op elk element. De nieuwe array is dus een array met 
// vrouwen van > 30 die ook allemaal een sterrenbeeld hebben
// De volgende filtermethod maakt een array met enkel vrouwen van > 30 die de sign 'CAPRICORN'
// hebben. 
// Tot slot worden deze vrouwen gesorteerd op volgorde van hun voornaam (name)
// Dit gebeurt omdat de sort method() een compareFunction meekrijgt. Hier is die compareFunction
// de sortByName function.
const getCapricornWomen = personData =>
  personData
    .filter(isWoman)
    .filter(isOver30)
    .map(addStarSign)
    .filter(isCapricorn)
    .sort(sortByName);

// Capricorn_women Stap 9a Nodig voor capricorn_women.js.
// name, surname, photo, age, birthday zijn keys van de personobjects 
    const generateCapricornWomanHTML = ({
  name,
  surname,
  photo,
  age,
  birthday,
}) => {
  // Add age and birthday to make manual checking easier.
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = `${name} ${surname}`;

  const photoSpan = document.createElement("span");
  photoSpan.innerHTML = photo;

  const ageSpan = document.createElement("span");
  ageSpan.innerHTML = age;

  const birthdaySpan = document.createElement("span");
  birthdaySpan.innerHTML = birthday.dmy;

  const li = document.createElement("li");
  li.appendChild(nameSpan);
  li.appendChild(photoSpan);
  li.appendChild(ageSpan);
  li.appendChild(birthdaySpan);

  return li;
};

// Capricorn_women Stap 9c Nodig voor capricorn_women.js.
const displayCapricornWomen = () => {
  getCapricornWomen(randomPersonData)
    .map(generateCapricornWomanHTML)
    .forEach(addToResultList);
};

// Capricorn_women Stap 10 Nodig voor capricorn_women.js.
document
  .querySelector(".capricorn_women")
  .addEventListener("click", displayCapricornWomen);