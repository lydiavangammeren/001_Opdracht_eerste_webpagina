/* 
- pagina wordt geladen
    - haal taken op bij API: loadPage ✔ 
    - per taak: 
        - laat taak zien in de DOM: displayTask ✔
        - laat done value van taak zien: displayTask ✔
        - maak checkoff button en plak die aan taak: addCheckOffButton ✔
        - hang eventlistener aan checkoff button: addEventListenerforCheckOffButton ✔
        - maak delete button en plak die aan taak: addDeleteButton ✔
        - hang eventlistener aan delete button: addEventListenerForDeleteButton ✔
    - hang eventlistener aan delete all button: addEventListenerForDeleteAllButton ✔
    - hang eventlistener aan add button: addEventListenerforAddButton ✔
*/
const ul = document.querySelector("ul");

const loadPage = async () => {
  try {
    removeAllTasksfromDOM();
    const tasks = await getTasks();
    tasks.forEach((task) => {
      displayTask(task);
    });
  } catch (error) {
    console.log(`Dit is de ${error}`);
  }
};

const addCheckOffButton = (listitem) => {
  const icon = document.createElement("i");
  icon.className = "todoList__checkoffbutton";
  icon.className = "fas fa-check-circle";
  icon.addEventListener("click", checkOffTask);
  listitem.appendChild(icon);
};

const addDeleteButton = (listitem) => {
  const icon = document.createElement("i");
  icon.className = "todoList__deletebutton";
  icon.className = "fas fa-trash-alt";
  icon.addEventListener("click", removeTask);
  listitem.appendChild(icon);
};

const displayTask = (task) => {
  const li = document.createElement("li");
  li.innerHTML = `<span id=${task.id} class="todoList__description">
    ${task.description} </span>`;
  addCheckOffButton(li);
  addDeleteButton(li);
  ul.appendChild(li);
};

// De checkOffTask functie moet een bepaalde taak doorstrepen in de DOM ✔
// Aan putTask moet hij meegeven:
// de done value van de taak naar true zetten ✔
// de id van deze taak ergens vandaan halen ✔
// de description uit de html span halen ✔

const checkOffTask = async (event) => {
  const task = event.target.parentNode;
  const id = event.target.previousElementSibling.id;
  const description = event.target.parentNode.innerText;
  let done;

  if (task.style.textDecoration === "line-through") {
    task.style.textDecoration = "none";
    done = false;
  } else {
    task.style.textDecoration = "line-through";
    done = true;
  }

  await putTask(id, description, done);
};

const removeTask = async (event) => {
  const task = event.target.parentNode;
  const id = event.target.previousElementSibling.previousElementSibling.id;
  const description = event.target.parentNode.innerText;
  console.log(description);
  await removeTaskFromAPI(id, description, false);
  task.innerText = "";
};

const removeAllTasksfromDOM = () => {
  while (ul.firstChild) {
    ul.removeChild(ul.lastChild);
  }
};
const addEventListenerForDeleteAllButton = () => {
  const deleteAllButton = document.querySelector(".todoList__deleteAllButton");
  deleteAllButton.addEventListener("click", () => {
    removeAllTasksfromDOM(), removeAllTasksFromAPI();
  });
};

addEventListenerForDeleteAllButton();

const addTask = async () => {
  const input = document.querySelector("input");
  let task = input.value;
  if (task) {
    const taskObject = { description: task, done: false };
    await postTask(taskObject);
    loadPage();
  }
};

const addEventListenerForAddButton = () => {
  const addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", addTask);
};

addEventListenerForAddButton();

const preventDefault = () => {
  const inputField = document.querySelector("form");
  inputField.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};

preventDefault();

// - op add button klikken
//     - taak moet naar API toe gepost worden ✔
//     - laat taak zien in de DOM: displayTask ✔
//     - et cetera, zie: pagina wordt geladen: idem ✔

// - op checkoff task button klikken
//     - tekst van taak moet doorgestreept worden: checkOffTask ✔
//     - done value moet geupdate worden naar true naar de API: putTask (al gemaakt) ✔

// - op delete task button klikken
//     - taak moet verwijderd worden uit ul lijst in DOM: removeTaskFromDOM ✔
//     - taak moet verwijderd worden in API: removeTaskFromAPI ✔

// - op delete all button klikken
//     - alle taken moeten verwijderd worden uit ul lijst in DOM: removeAllTasksFromDOM ✔
//     - alle taken moeten verwijderd worden in API: removeAllTasksFromAPI ✔
