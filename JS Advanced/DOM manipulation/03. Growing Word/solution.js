
let state = 0;
function growingWord() {
  const colors = ["#5B88BD", "#8FF897", "#A40014"]

  let word = document.querySelector("#exercise p");

  if (word === null) {
    throw new Error("error")
  }

  let size = parseFloat(window.getComputedStyle(word, null).getPropertyValue('font-size'));

  word.style.fontSize === "" ? word.style.fontSize = (size + 2) + "px"
    : word.style.fontSize = (size * 2) + "px";

  word.style.color = colors[state++]

  if (state >= colors.length) {
    state = 0;
  }
}
