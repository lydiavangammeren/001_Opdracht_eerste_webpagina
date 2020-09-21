// Met CTRL Shift L alle occurences selecteren, met F2 kun je ze vervolgens
// allemaal tegelijk aanpassen

// alle big five buttons in een html collectie
let bigfiveButtons = document.getElementsByClassName("big-five-button");

// gebruik gemaakt van spread syntax om van de bigfiveButtons een array te maken,
// zodat ik er doorheen kan met de forEach method.
// "The forEach() method executes a provided function once for each array element" (MDN)
// "The EventTarget method addEventListener() sets up a function that will be called
// whenever the specified event is delivered to the target." (MDN)
[...bigfiveButtons].forEach((button) =>
  button.addEventListener("click", (event) => {
    //console.log(button.textContent);
    const listElement = document.createElement("li");
    listElement.textContent = button.textContent
    listElement.classList.add("big-five-list-item");
    //console.log(listElement);
    const spottedList = document.getElementById("spotted-animals-list")
    //console.log(spottedList);
    spottedList.appendChild(listElement);
    //listElement.appendChild(button)
    
  })
);

const removeFirstItemButton = document.getElementById("remove-first-item-button");

removeFirstItemButton.addEventListener("click", (event) => {
  const spottedList = document.getElementById("spotted-animals-list");
  const firstSpotted = spottedList.children[0];
  if (firstSpotted) {  
  spottedList.removeChild(firstSpotted);
  }
})

const removeAllButton = document.getElementById("remove-all-button");

removeAllButton.addEventListener("click", (element) => {
  const spottedList = document.getElementById("spotted-animals-list");
  spottedList.querySelectorAll('*').forEach(n => n.remove());
  console.log(spottedList.querySelectorAll('*'));
})




// const newLi = document.createElement('li');

// const anotherNewLi = document.createElement('li');

// const spottedAnimalsList = document.getElementById('spotted-animals-list');

// spottedAnimalsList.appendChild(newLi);
// newLi.innerText = "Lion";

// spottedAnimalsList.insertBefore(anotherNewLi, spottedAnimalsList.getElementsByTagName('li')[0]);
// anotherNewLi.innerText = "Nogeendier";

// const firstChild = spottedAnimalsList.children[0]

// const removedfirstChild = spottedAnimalsList.removeChild(firstChild);

// spottedAnimalsList.appendChild(removedfirstChild)
