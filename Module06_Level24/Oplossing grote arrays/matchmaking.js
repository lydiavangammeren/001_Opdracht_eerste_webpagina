// Hier worden alle sterrenbeelden gedefinieerd met een string met de naam van het sterrenbeeld

const ARIES = "Aries";
const TAURUS = "Taurus";
const GEMINI = "Gemini";
const CANCER = "Cancer";
const LEO = "Leo";
const VIRGO = "Virgo";
const LIBRA = "Libra";
const SCORPIO = "Scorpio";
const SAGGITARIUS = "Saggitarius";
const CAPRICORN = "Capricorn";
const AQUARIUS = "Aquarius";
const PISCES = "Pisces";

// Deze functie heeft de parameters people en credit_card_number.
// People moet een array zijn, en credit_card_number een nummer?
// Vervolgens ga je de people array filteren zodat je een array hebt 
// waarbij de credit_card.number's van de person gelijk zijn aan 
// credit_card_number. 
// Tot slot neem je van deze array het element met index 0.
// We assume every one has a unique credit card number here.
const getPersonWithId = (people, credit_card_number) =>
  people.filter(person => person.credit_card.number === credit_card_number)[0];


// Deze functie heeft een sign als parameter
// Vervolgens maakt het een object met als keys een array van 1 sterrenbeeld, 
// en als value een array van 'matchende' sterrenbeelden.
// Uit dit object haalt hij vervolgens de value waarvan de key de index/naam(?) heeft van
// de desbetreffende sign
const getMatchingSigns = sign =>
  ({
    [ARIES]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
    [LEO]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA],
    [SAGGITARIUS]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
    [TAURUS]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
    [VIRGO]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO],
    [CAPRICORN]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
    [GEMINI]: [ARIES, LEO, GEMINI, LIBRA, AQUARIUS],
    [LIBRA]: [LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
    [AQUARIUS]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
    [CANCER]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
    [SCORPIO]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
    [PISCES]: [TAURUS, CAPRICORN, CANCER, SCORPIO, PISCES],
  }[sign]);

// Deze functie heeft de parameters people (een array) en sign
// Vervolgens definieert hij matchingSigns als het resultaat van het aanroepen van 
// de getMatchingSigns functie met het desbetreffende sign.
// Wat je dan hebt is een array met matchende signs voor dit betreffende sterrenbeeld
// Doe een console.log om dit te testen
// Hierna ga je kijken welke people een sterrenbeeld hebben dat in dit array van
// matchende signs zit
// Dat doe je door de matches als volgt te definieeren:
// matches is het resultaat van het aanroepen van de filter method op het people array
// De filter functie die aan de filter method wordt meegegeven checkt bij elke 
// 'potential match'(gewoon een persoon uit de people array dus) of de sign van die
// potential match is inbegrepen in de matching signs arrays.
// Zo krijg je een (lange!) array van people die allemaal een match zijn voor het desbetreffende
// sign. Die array wordt tot slot gereturnd.-
const getMatchesForSign = (people, sign) => {
  const matchingSigns = getMatchingSigns(sign);
  //console.log(matchingSigns)
  const matches = people.filter(potentialMatch =>
    matchingSigns.includes(potentialMatch.sign)
    
  );
  //console.log(matches)
  return matches;
  
};

// Hoe werkt dit? Target.dataset4 is nog helemaal niet aan bod gekomen
const getMatchesForPerson = event => {
  const credit_card_number = event.target.dataset.id;

  // Using global variable here, not that nice.
  // Calling getPeople again is not very efficient.
  const people = getPeople(randomPersonData);

  const person = getPersonWithId(people, credit_card_number);
  // .self hebben we ook nog niet gehad
  person.self = true;
  let matches = getMatchesForSign(people, person.sign);
  // Don't match with yourself.
  // Hier wordt matches opnieuw gedefinieerd. De matches array
  // wordt gefilterd zodat de nieuwe array alleen personen bevat
  // waarvan het credit_card_number niet gelijk is aan hun eigen credit_card.number
  matches = matches.filter(
    person => person.credit_card.number !== credit_card_number
  );

  //The concat() method is used to merge two or more arrays. 
  // This method does not change the existing arrays, but instead returns a new array.
  // Display every one with self at the top.
  // De displayPeople functie wordt pas op regel 153 gedefinieerd 
  displayPeople([person].concat(matches));
};

// Deze functie geeft een 'card' met info over een persoon
// Als parameter krijgt het een object mee met bepaalde key-value pairs.
// Let op: in de orginele randomPersonData array hebben de persoonobjecten
// veel meer key-value pairs, dit is slechts een selectie daarvan
// Voor alle keys van dit object wordt vervolgens een span met een
// class en innerHTML gemaakt,  gemaakt, BEHALVE voor de credit_card key.
// ook wordt er voor de card nog een button aangemaakt met de innerhtml 'find matches'
// Die button krijgt een eventListener mee waardoor de getMatchesForPerson uitgevoerd 
// wordt voor deze persoon. De matches worden trouwens rechts van deze personCard getoond,
// en bestaan uit cards van de personen die matchen met deze persoon

const getPersonCardHTML = ({
  name,
  surname,
  self,
  region,
  age,
  birthday,
  sign,
  credit_card,
}) => {
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  nameSpan.innerHTML = `${name} ${surname}`;

  const countrySpan = document.createElement("span");
  nameSpan.classList.add("country");
  countrySpan.innerHTML = `Country: ${region}`;

  const ageSpan = document.createElement("span");
  nameSpan.classList.add("age");
  ageSpan.innerHTML = `Age: ${age}`;

  const birthdaySpan = document.createElement("span");
  birthdaySpan.innerHTML = `Date of birth: ${birthday.dmy}`;

  const signSpan = document.createElement("span");
  signSpan.innerHTML = `Astrological sign: ${sign}`;

  const button = document.createElement("input");
  button.type = "button";
  button.value = `Find matches`;
  // We use data attributes to refer to a specific person
  // We make a (very poor) assumption here that no one has the same credit card number
  // De id van de button wordt gedefinieerd als 'credit_card.number
  button.dataset.id = credit_card.number;
  button.addEventListener("click", getMatchesForPerson);

  const card = document.createElement("div");
  card.classList.add("card");
  if (self) {
    card.classList.add("self");
  }

  card.appendChild(nameSpan);
  card.appendChild(countrySpan);
  card.appendChild(ageSpan);
  card.appendChild(birthdaySpan);
  card.appendChild(signSpan);
  card.appendChild(button);

  return card;
};

// Als deze functie wordt aangeroepen laat hij de people zien in de DOM,
// nadat hij eerst de resullist en buttonlist heeft leeggemaakt door de desbetreffende
// functies aan te roepen
const displayPeople = people => {
  emptyResultList();
  emptyButtonList();
  people.map(getPersonCardHTML).forEach(addToButtonList);
};

const getPeople = personData => {
  personData = personData
    .filter(person => person.age > 17)
    .map(person => {
      person.self = false; // TODO: Could make this nicer.
      return person;
    })
    .map(addStarSign);

  personData.sort((person1, person2) =>
    sort_helper(person1.name < person2.name)
  );
  return personData;
};

const matchMaking = () => {
  displayPeople(getPeople(randomPersonData));
};

document.querySelector(".matchmaking").addEventListener("click", matchMaking);
