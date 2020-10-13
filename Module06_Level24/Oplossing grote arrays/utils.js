// capricorn_women Stap 7. Deze moet je samen met Stap 8 maken, het
// is een helper functie die je nodig hebt voor de sortbyName function
// Nodig voor capricorn_women.js
// De sort_helper functie heeft result als parameter. Deze parameter
// heeft een boolean value van true of false.
// Als result true is geeft deze functie een 1 terug. Anders geeft deze functie een -1 terug
// The callback we pass into array.sort officially should return 1, 0 or -1
// Firefox does this conversion itself.
// Chrome needs this helper.
const sort_helper = (result) => {
  // We can make this shorter with a ternary.
  if (result) {
    return 1;
  } else {
    return -1;
  }
};

// capricorn_women Stap 4
// Deze functie heb je nodig voor de functie addStarSign (Stap 5)
// Nodig voor capricorn_women.js
// Deze functie heeft twee parameters: een maand en een dag
// In de function body wordt gecheckt welke maand het is en tussen
// welke waarden de dag valt. Vervolgens wordt een string gereturnd met
// het bijbehorende sterrenbeeld
const getStarSign = (month, day) => {
  // Normally adding {} to if statements is better but here's an exception.
  if (month === 1 && day <= 20) return CAPRICORN;
  if (month === 1 && day >= 21) return AQUARIUS;
  if (month === 2 && day <= 19) return AQUARIUS;
  if (month === 2 && day >= 20) return PISCES;
  if (month === 3 && day <= 20) return PISCES;
  if (month === 3 && day >= 21) return ARIES;
  if (month === 4 && day <= 20) return ARIES;
  if (month === 4 && day >= 21) return TAURUS;
  if (month === 5 && day <= 20) return TAURUS;
  if (month === 5 && day >= 21) return GEMINI;
  if (month === 6 && day <= 21) return GEMINI;
  if (month === 6 && day >= 22) return CANCER;
  if (month === 7 && day <= 22) return CANCER;
  if (month === 7 && day >= 23) return LEO;
  if (month === 8 && day <= 23) return LEO;
  if (month === 8 && day >= 24) return VIRGO;
  if (month === 9 && day <= 21) return VIRGO;
  if (month === 9 && day >= 22) return LIBRA;
  if (month === 10 && day <= 22) return LIBRA;
  if (month === 10 && day >= 23) return SCORPIO;
  if (month === 11 && day <= 21) return SCORPIO;
  if (month === 11 && day >= 22) return SAGGITARIUS;
  if (month === 12 && day <= 21) return SAGGITARIUS;
  if (month === 12 && day >= 22) return CAPRICORN;
};

// capricorn_women Stap 5
// Nodig voor capricorn_women.js
// De functie addStarSign krijgt een persoon mee als parameter.
// In de function body wordt eerst een maand gedefinieerd in de constante 'month'.
// De maand wordt gehaald uit person.birthday.dmy
// Person is 1 'persoonobject (met meerdere key-value pairs)' uit de randomPersonData array
// 1 van de keys van zo'n person is birthday. Birthday heeft als value een object met drie
// key-value pairs. In deze const month wordt het eerste key-value pair hiervan gebruikt,
// te weten de birthday in day/month/year notatie
// Het eerste key-value pair is een string en ziet er bijvoorbeeld zo uit: "29/08/1987"
// The split() method divides a String into an ordered list of substrings,
// puts these substrings into an array, and returns the array.
// The division is done by searching for a pattern;
// where the pattern is provided as the first parameter in the method's call.
// Door middel van de split() method heb je nu dus van de string "29/08/1987" een
// array gemaakt van substrings. Vervolgens geef je aan dat je van die array de substring 
// [1] wilt hebben, oftewel: de maand string ("08")
// Van de string "08" maak je vervolgens door middel van parseInt een 8. Hoe dat precies
// werkt weet ik nog niet helemaal, parseInt MDN documentatie lezen voor meer info.
// De const day werkt precies hetzelfde, maar dan met de substring dat de 0e positie
// heeft in de array. In dit geval dus "29"
// Nu je month en day op deze manier hebt omgezet geef je aan het 'persoonobject'
// een nieuwe key mee: sign. De value is het resultaat van het aanroepen van de 
// functie "getStarSign" met de argumenten month en day, die je zonet hebt gemaakt.
// Deze value is dus een string met een sterrenbeeld, in dit geval dus de string "VIRGO"
// Vervolgens wordt (als ik het goed begrijp) het 'persoonobject' gereturnd met de nieuwe
// key genaamd 'sign' (sterrenbeeld)
const addStarSign = (person) => {
  const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
  const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
  person.sign = getStarSign(month, day);
  return person;
};

// countries Stap 2. Nodig voor countries.js. Deze functie moet je samen met
// stap 1 maken, anders werkt stap 1 nog niet. Wat je ook kunt doen
// is eerst stap 1 maken en de ".reduce(keepUnique)" nog even
// uitgecommend laten totdat je deze keepUnique functie hebt gemaakt.
//
// De reducer function keepUnique wordt meegegeven aan array.reduce.
// Hoe ik het begrijp ziet deze reducer function er iets anders uit dan
// de reducer function zoals ik die ken uit de MDN definitie
//
// Deze functie zorgt ervoor dat er geen dubbele items worden toegevoegd aan de array
// We could use Set to make this nicer.
const keepUnique = (items, item) => {
  // We don't want the caller to have to pass in an empty array.
  // Onderstaande regel begrijp ik als volgt:
  // Als de items array geen array is wordt items vervolgens gedefinieerd als een lege array
  if (!Array.isArray(items)) items = [];
  // Onderstaande regel begrijp ik als volgt: als de 'items'array niet dit bepaalde
  // item bevat, kan het item in de array gepushed worden
  if (!items.includes(item)) items.push(item);
  // Tot slot geeft hij de array met de unieke items terug
  return items;
};
// countries Stap 1 Nodig voor countries.js. Eerst wil je de countries/regions 'in je handje krijgen'
// voordat je er iets mee kunt doen (zoals ze in de DOM zetten)
// De getCountries functie krijgt als parameter een array mee van personen
// In de function body wordt over deze array heengegaan met de map method.
// De map method geeft een nieuwe aray met alle regions die bij de personen horen
// Sommige regions komen meerdere keren voor, omdat er persons zijn die uit dezelfde
// region komen. Op deze region array wordt daarom de reduce() method toegepast
// en hieraan wordt de reducer function "keepUnique" meegegeven
// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.
// Maar in plaats van dat er 1 output value overblijft, blijven er alleen
// unieke landen over. Dus even navragen hoe dit werkt
// Tenslotte wordt op deze array met unieke landennamen de sort() method
// toegepast, die ze by default sorteert op alfabetische volgorde
const getCountries = (personData) =>
  personData
    .map((person) => person.region)
    .reduce(keepUnique)
    .sort();

// countries Stap 5 
// capricorn_women Stap 11
// credit-card Stap 8
// countries_most_people Stap 4
// average_age Stap 2a
// Als er eenmaal een result list (een ul met li items) is moet deze
// met een click op een andere button ook weer leeg worden gemaakt,
// zodat er ruimte is om de result list te vullen met de resultaten van die andere button.
// Met deze functie wordt alvast een emptyResultList function gedefinieerd,
// die vervolgens in de laatste Stap wordt aangeroepen
// Nodig voor alle 6 de js scripts
// Met de functie emptyResultList zetten we de
// innerhtml van de ul die de class "results" heeft naar een lege string ("")
const emptyResultList = () =>
  (document.querySelector(".results").innerHTML = "");

// countries Stap 3 b
// capricorn_women Stap 9b
// credit-card Stap 6b
// countries_most_people Stap 2b
// average_age Stap 2b
// Nodig voor alle 6 de js scripts
// Aan de functie addToResultList geven we de parameter 'li' mee.
// Deze parameter wordt later ingevuld met het argument 'li' dat is gecreerd in de generateCountryHTML functie
// Deze "li" wordt toegevoegd aan de ul die de class
// "results" heeft.
const addToResultList = (li) =>
  document.querySelector(".results").appendChild(li);

// average_age.js Stap 5a
// Deze functie doet precies hetzelfde als de emptyResultList, maar dan met de subbuttons
// Dus: de innerHTML van de ul met de class van 'sub_buttons' wordt weer naar een lege
// string gezet, waardoor alle subbuttons weer verdwijnen.
const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = "");

// average_age.js  Stap 3b
// Deze functie heeft button als parameter en maakt in zijn function body
// die button vast aan de ul met de class van 'sub_buttons')
const addToButtonList = button =>
  document.querySelector(".sub_buttons").appendChild(button);

// countries Stap 6 
// capricorn_women Stap 12
// credit-card Stap 9 
// countries_most_people Stap 5
// average_age.js Stap 5b
// Als er geclickt wordt op een button wordt de resultList van de button
// waar je eerder op had geclickt weer leeggemaakt.
// In het geval van average_age.js wordt ook de country-subbuttonlist weer leeggemaakt
//
// Nodig voor alle 6 de js scripts
// The forEach() method of the NodeList interface calls the callback given in parameter
// once for each value pair in the list, in insertion order
// De forEach() method roept de meegegeven callback aan voor elke nav input
// (oftewel, voor elke button)
// De eventlistener luistert naar een klik op de button (de input) en voert dan
// de functies "emptyResultList" en "emptyButtonList" uit
// Each nav button we click should first empty the UI.
// ! These elements will get multiple event listeners.
document.querySelectorAll("nav input").forEach((input) =>
  input.addEventListener("click", () => {
    emptyResultList();
    // Nodig voor average_age.js:
    // Het aanroepen van de emptyButtonList zorgt ervoor dat de subbuttons weer verdwijnen
    emptyButtonList();
  })
);
