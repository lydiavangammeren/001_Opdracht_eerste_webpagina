const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];
// // 1. Maak een array van alle superhelden namen
// const alleNamenVanSuperheroes = superheroes.map(hero => hero.name);

// console.log(alleNamenVanSuperheroes);

// // 2. Maak een array van alle "lichte" superhelden (< 190 pounds)

// const alleLichteSuperheroes = superheroes.filter(element => {return element.weight < 190});

// console.log(alleLichteSuperheroes);

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen

//Extra: chaining

//  Het mooie aan array methods is, je kunt ze chainen.
//   Oftwel je kunt er een ketting van maken.
//   Als je bijvoorbeeld eerst een .filter functie hebt uitgevoerd
//   om de superhelden te filter die 200 pound wegen.
//    Dan kun je daarna een .map functie eraan "vastplakken"
//    die de namen van de superhelden returned.

// // Pseudo code (bijna echte code):
// const nameSuperHeroes200 = (superheroes.filter(element => {
//     return element.weight == 200;
// }).map(element => { return element.name}))

// console.log(nameSuperHeroes200)

// 4. Maak een array met alle comics
// waar de superhelden hun "first appearances" hebben gehad

// const alleFirstAppearances = superheroes.map(hero => hero.first_appearance);

// console.log(alleFirstAppearances)

// // 5. Maak een array met alle superhelden van DC Comics.
// // Is dat gelukt? Herhaal de bovenstaande functie dan en
// // maak ook een array met alle superhelden van Marvel Comics.

// const alleDCSuperheroes = (superheroes.filter(element => {
//         return element.publisher === "DC Comics";
//     }).map(element => { return element.name}))

// console.log(alleDCSuperheroes)

// const alleMarvelSuperheroes = (superheroes.filter(element => {
//     return element.publisher === "Marvel Comics";
// }).map(element => { return element.name}))

// console.log(alleMarvelSuperheroes)

// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
// Let op! Conditionals to the rescue!
// Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat?
// Een nummer? Of een string?
// Oh ja, en hebben alle superhelden wel een gewicht?

// map stukje werkt nog niet goed, hoe krijg ik die "unknown" 'weg', of moet ik eerst
// parseInt toepassen?
const gewichtalleDCSuperheroes = superheroes
  .filter((element) => {
    return element.publisher === "Marvel Comics";
  })

  .map(element => {
        return parseInt(element.weight)
        
    })
  

  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(gewichtalleDCSuperheroes);

// 7. idem, alleen element.publisher veranderen naar "DC Comics"
