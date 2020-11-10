//Heb dit even uitgecomment, is irritant als het steeds tevoorschijn komt
//alert("Druk op de button!"); 


const apiUrl = "https://www.tronalddump.io/";
const randomQuote = `${apiUrl}/random/quote`;

const getRandomQuote = async () => {
  try {
    const response = await fetch(randomQuote, { method: "GET" }) //fetch haalt data op bij het adres van randomQuote
      .then((result) => result.json()); //zet de data(result) om naar json object
    //console.log(response.value); //array in json object
    return response.value;
  } catch (error) {
    console.log(error);
  }
};

console.log("Get random quote:", getRandomQuote())

const generateRandomQuoteHTML = async () => {
  const li = document.createElement("li");
  li.innerHTML = await getRandomQuote();
  return li;
};

const emptyRandomQuotesList = () =>
  (document.querySelector("#randomquoteslist").innerHTML = "");

const addToRandomQuotesList = (li) =>
  document.querySelector("#randomquoteslist").appendChild(li);

const displayRandomQuote = async () => {
  emptyRandomQuotesList()
  addToRandomQuotesList(await generateRandomQuoteHTML())
};

document
  .querySelector("#dommeuitspraak")
  .addEventListener("click", displayRandomQuote);


