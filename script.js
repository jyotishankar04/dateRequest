function nextPage() {
  window.location.href = "./Yes.html";
}

function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth - document.getElementById("no").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight - document.getElementById("no").offsetHeight);
  document.getElementById("no").style.left = `${x}px`;
  document.getElementById("no").style.top = `${y}px`;
}

document.querySelector("#no").addEventListener("mouseover", () => {
  moveButton();
});
document.querySelector("#yes").addEventListener("click", () => {
  nextPage();
});
