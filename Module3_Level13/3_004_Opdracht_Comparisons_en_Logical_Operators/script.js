const age = 25;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 50;

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Sorry, je mag helaas niet naar binnen");
}

if (isFemale) {
  console.log("Wees welkom bij de Ladies night!");
} else "Vanavond kun je helaas niet naar binnen";

if (driverStatus === "bob") {
  console.log("Fijne avond en rij voorzichtig!");
} else {
  console.log("Ik bel wel een taxi voor je");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Jij betaalt de volle mep");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Gratis bier voor jou, " + name);
}

if (totalAmount > 25 && totalAmount < 50) {
  console.log("Gratis bitterballen!");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Gratis nachos!");
} else if (totalAmount > 100) {
  console.log("Flesje champagne!");
} else {
  console.log("Als je nog wat meer bestelt krijg je een verrasing van ons!");
}
