const colors = ["yellow", "blue", "red", "orange"];
i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach((element) => console.log(element));

// deze while loop heeft 4 regels, de for loop 3 regels en de forEach method slechts 1 regel
// bij de forEach method is het duidelijker wat de  method precies doet 
//

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
const allesOverPersoon = Object.entries(person)
console.log(allesOverPersoon)
allesOverPersoon.forEach((element) => console.log(element));

// Ik denk het wel, voor elk element van het object doe je hetzelfde
