const toggleMenuVisibility = (id) => {
  document.getElementById(id).addEventListener("click", () => {
    document.querySelector(".nav-sidebar ul").classList.toggle("hidden");
  });
};

toggleMenuVisibility("togglebutton");
toggleMenuVisibility("green");
toggleMenuVisibility("yellow");
toggleMenuVisibility("orange");
toggleMenuVisibility("blue");
toggleMenuVisibility("red");

const changeColor = (color) => {
  const colorInMenu = document.getElementById(color);
  const textcolor = document.getElementById("textcolor");
  colorInMenu.addEventListener("click", function () {
    textcolor.textContent = `${color}`;
    document.body.style.backgroundColor = `${color}`;
  });
};

changeColor("green");
changeColor("yellow");
changeColor("orange");
changeColor("blue");
changeColor("red");
