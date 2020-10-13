// // Creditcard Stap 2 Nodig voor credit-card.js
// Deze functie moet je gedefinieerd hebben voordat je 
// de getCreditCardsThatWillExpire(stap 1)
// gaat uitvoeren
//
// Dit geeft een boolean value
const isAdult = person => person.age > 17;

// // Creditcard Stap 3 Nodig voor credit-card.js
// Deze functie moet je gedefinieerd hebben voordat je 
// de getCreditCardsThatWillExpire(stap 1)
// gaat uitvoeren
//
// Deze functie geeft aan het credit_card object een 'leesbare' expiration_date key mee
// credit_card is een object binnen het 'personobject'. 
// Van credit_card wordt de key 'expiration' genomen en van de value daarvan (bijvoorbeeld "1/22")
// wordt door middel van split een array met substrings gemaakt
// Vervolgens kan het expirationYear verkregen worden door voor 
// het element met index 1 van deze array de string "20" te zetten. Dit wordt vervolgens
// met parseInt omgezet in een integer (number)
// Expirationmonth werkt op dezelfde manier, alleen wordt er een 1 van afgetrokken omdat
// januari binnen een Date object als 0 wordt gezien.
// Tot slot wordt expirationDay standaard op 1 gezet. Volgens mij wordt een expirationDay
// meegegeven vanwege de noterig van het Date object
// Nu deze drie variables zijn gedefinieerd wordt een expiration_date key meegegeven
// aan het credit_card object. De value van deze key is een new Date met 
// de values van de hierboven gedeclareerde const variables. Bijvoorbeeld: 2022, 0, 1
// Tot slot wordt het 'credit_card object met expiration date' gereturnd
// (voor de person waar deze functie op wordt toegepast)
const convertExpirationDate = person => {
  const expiration = person.credit_card.expiration.split("/");
  const expirationYear = parseInt("20" + expiration[1]);
  const expirationMonth = parseInt(expiration[0]) - 1; // Jan = 0, Dec = 11
  const expirationDay = 1; // Default
  person.credit_card.expiration_date = new Date(
    expirationYear,
    expirationMonth,
    expirationDay
  );
  return person;
};

// // Creditcard Stap 4 Nodig voor credit-card.js
// Deze functie moet je gedefinieerd hebben voordat je 
// de getCreditCardsThatWillExpire(stap 1)
// gaat uitvoeren
//
// Take out the expiration_date immediately.
//
// Als ik het goed begrijp heeft deze functie de key 'expiration date' van
//  het credit_card object als parameter. 
// In de body van deze functie wordt een variable gedefinieerd met de datum
// van 1 jaar in de toekomst. Voor uitleg zie hieronder. 
// De const variable 'now' wordt gedefinieerd als de datum van dit moment
// Vervolgens returnt deze functie een boolean. Hij return true als de expiration_date
// verder ligt dan de huidige datum en minder ver dan een jaar in de toekomst ligt
const cardExpiresInOneYear = (person) => {
  // Thanks Stack Overflow https://stackoverflow.com/a/29052008
  // Uitleg: 
  // This will create a Date exactly one year in the future with just one line.
  //  First we get the fullYear from a new Date, increment it, 
  //  set that as the year of a new Date. 
  //  You might think we'd be done there,
  //  but if we stopped it would return a timestamp, not a Date object 
  //  so we wrap the whole thing in a Date constructor.
  const oneYearFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  const now = new Date();

  return person.credit_card.expiration_date > now && person.credit_card.expiration_date < oneYearFromNow;
};


// // Creditcard Stap 5 Nodig voor credit-card.js
// Deze functie moet je gedefinieerd hebben voordat je 
// de getCreditCardsThatWillExpire(stap 1)
// gaat uitvoeren
//
// Deze functie zorgt ervoor dat de creditcards met de expiratie_date die
// het dichtst bij het 'nu' ligt als eerste worden getoond
// het maakt gebruik van de 'helper functie' sort_helper. 
// De sort_helper wordt hier aangeroepen. Als argument krijgt het een
// boolean value mee, namelijk de uitkomst van de vergelijking van de expiration_date
// van card1 en card2
const sortByExpirationDate = (person1, person2) =>
  sort_helper( person1.credit_card.expiration_date > person2.credit_card.expiration_date);

// Credit-card Stap 1 Nodig voor credit-card.js.
// Deze functie zorgt ervoor dat je de creditcards die aan de voorwaarden voldoen
// 'in je handje' krijgt zodat je er later iets mee kunt doen
//  (bijvoorbeeld: ze in de DOM zetten)
// In de function body wordt de randomPersonData eerst gefilterd zodat alleen een array
// met volwassenen overblijft.
// Vervolgens wordt over die nieuwe array heengegaan met map 
// en wordt de expiration date 'leesbaar' gemaakt door de functie die daaraan wordt
// meegegeven (zie: convertExpirationDate)
// De nieuwe array die zo ontstaat wordt vervolgens weer gefilterd tot een nieuwe array
// waarin alleen de creditcards die binnen 1 jaar verlopen staan. Dit gebeurt door aan
// het filter de functie 'cardExpiresInOneYear' mee te geven
// De array met leesbare creditcards die binnen 1 jaar verlopen wordt vervolgens met 
// sort() gesorteerd zodat de creditcards die het eerst verlopen bovenaan staan.
// Dit gebeurt door aan sort de functie 'sortByExpirationDate' mee te geven.
const getCreditCardsThatWillExpire = () =>
  randomPersonData
    .filter(isAdult)
    .map(convertExpirationDate)
    .filter(cardExpiresInOneYear)
    // Earlier dates at the top.
    .sort(sortByExpirationDate);

// Creditcard Stap 6a Nodig voor credit-card.js
// 
// Deze functie creert voor elke person een li element met alle info eraan toegevoegd
// via appendChild     
const generateCCHTML = person => {
  const li = document.createElement("li");

  const name = document.createElement("span");
  name.innerHTML = `${person.name} ${person.surname}`;

  const phone = document.createElement("span");
  phone.innerHTML = `Phone: ${person.phone}`;

  const card_details = document.createElement("span");
  card_details.innerHTML = `Card: ${person.credit_card.number}`;

  const expires = document.createElement("span");
  expires.innerHTML = `Expires: ${person.credit_card.expiration}`;

  li.appendChild(name);
  li.appendChild(phone);
  li.appendChild(card_details);
  li.appendChild(expires);

  return li;
};

// Creditcard Stap 6c Nodig voor credit-card.js
const displayOldCreditcardList = () =>
  getCreditCardsThatWillExpire().map(generateCCHTML).forEach(addToResultList);

// Creditcard Stap 7 Nodig voor credit-card.js
// Op het moment dat op de button met de class credit_card wordt geklikt wordt
// de displayOldCreditcardList functie uitgevoerd
document
  .querySelector(".credit-card")
  .addEventListener("click", displayOldCreditcardList);
