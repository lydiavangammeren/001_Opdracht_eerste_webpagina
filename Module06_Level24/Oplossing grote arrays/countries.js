// Countries Stap 3 a
// De generateCountryHTML functie krijgt als parameter een country mee.
// In de function body wordt een li element aangemaakt. 
// De tekst van dat li element is het desbetreffende country
// Het resultaat hiervan wordt teruggegeven. 

const generateCountryHTML = country => {
    const li = document.createElement("li");
    li.innerHTML = country;
    return li;
  };
  
  // Countries Stap 3c. Deze functie laat de countries/regions zien in de DOM
  // Voor deze stap moet je generateCountryHTML en addToResultList al hebben gemaakt
  //
  // De displayCountries functie gaat in zijn function body over een array heen
  // met map en forEach. Map maakt een nieuwe array aan met 
  //als inhoud het resultaat van het aanroepen van
  // de meegegeven generateCountryHTML functie op elk van de elementen (countries) uit de originele array. 
  // de forEach() method voert de "addToResultList" function 1 keer uit voor elk element 
  // van de nieuwe array 
  const displayCountries = () =>
  // De array waar overheen wordt gegaan is: getCountries(randomPersonData)
    getCountries(randomPersonData)
      .map(generateCountryHTML)
      .forEach(addToResultList);
  
  // Countries Stap 4
  // Selecteert de button met de class "countries" en voegt daar een eventlistener aan toe.
  // De eventlistener luistert naar een klik. 
  // Als de user klikt wordt de functie displayCountries
  // uitgevoerd.    
  document
    .querySelector(".countries")
    .addEventListener("click", displayCountries);