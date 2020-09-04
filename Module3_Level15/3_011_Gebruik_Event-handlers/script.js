const myButton = document.getElementById("mybutton");
myButton.addEventListener("click", function () {
  alert("button clicked");
});

const bluebutton = document.getElementsByClassName("blue-background");
bluebutton.addEventListener("click", function () {
  // if (bluebutton.backgroundColor === "blue") {
  //   bluebutton.backgroundColor = "red";
  //   document.getElementsByClassName("blue-background").style.backgroundColor = backgroundColor;
  // } else if (bluebutton.backgroundColor === "red") {
  //   bluebutton.backgroundColor = "blue";
  //   document.getElementsByClassName(
  //     "blue-background"
  //   ).style.backgroundColor = backgroundColor;
  // }
  alert("blue clicked");
});
