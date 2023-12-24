// !This is the functionn for yes that will refer to the yes.html
function nextPage() {
  window.location.href = "./Yes.html";
}

// !This is the function to move the no button when hover
function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth - document.getElementById("no").offsetWidth); //* this will generate random X-axis position
  var y =
    Math.random() *
    (window.innerHeight - document.getElementById("no").offsetHeight); //* this will generate random Y-axis position
  document.getElementById("no").style.left = `${x}px`;
  document.getElementById("no").style.top = `${y}px`;
}

document.querySelector("#no").addEventListener("mouseover", () => {
  moveButton(); //!Acticating the mouseHover Event
});
document.querySelector("#yes").addEventListener("click", () => {
  nextPage(); //!Calling nextpage function
});
