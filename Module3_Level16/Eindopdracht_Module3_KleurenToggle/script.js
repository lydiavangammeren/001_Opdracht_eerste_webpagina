let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span ");
  
  
  let getSidebarListitems = document.getElementsByTagName("li");
  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebarTitle.style.opacity = "0.6";
    

    let arrayLength = getSidebarListitems.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarListitems[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarListitems.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarListitems[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

const backgroundToGreen = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("green-background");
};

const changeBackgroundColorOfPageGreen = function () {
  const toggleBackgroundToThisColor = document.getElementById("green");
  toggleBackgroundToThisColor.addEventListener("click", function () {

    document.getElementById("toggleColorName").innerHTML = "Green";

    backgroundToGreen();
    

  });
};

const backgroundToYellow = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("yellow-background");
};

const changeBackgroundColorOfPageYellow = function () {
  const toggleBackgroundToThisColor = document.getElementById("yellow");
  toggleBackgroundToThisColor.addEventListener("click", function () {

    document.getElementById("toggleColorName").innerHTML = "Yellow";

    backgroundToYellow();

  });
};

const backgroundToOrange = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("orange-background");
};

const changeBackgroundColorOfPageOrange = function () {
  const toggleBackgroundToThisColor = document.getElementById("orange");
  toggleBackgroundToThisColor.addEventListener("click", function () {

    document.getElementById("toggleColorName").innerHTML = "Orange";

    backgroundToOrange();

  });
};

const backgroundToBlue = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("blue-background");
};

const changeBackgroundColorOfPageBlue = function () {
  const toggleBackgroundToThisColor = document.getElementById("blue");
  toggleBackgroundToThisColor.addEventListener("click", function () {

    document.getElementById("toggleColorName").innerHTML = "Blue";

    backgroundToBlue();

  });
};

const backgroundToBurgundy = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("burgundy-background");
};

const changeBackgroundColorOfPageBurgundy = function () {
  const toggleBackgroundToThisColor = document.getElementById("burgundy");
  toggleBackgroundToThisColor.addEventListener("click", function () {

    document.getElementById("toggleColorName").innerHTML = "Burgundy";

    backgroundToBurgundy();

  });
};


changeBackgroundColorOfPageGreen();
changeBackgroundColorOfPageYellow();
changeBackgroundColorOfPageOrange();
changeBackgroundColorOfPageBlue();
changeBackgroundColorOfPageBurgundy();

