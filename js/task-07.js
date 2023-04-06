const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function fontSizeHandler() {
  text.style.fontSize = range.value + "px";
}

range.addEventListener("input", fontSizeHandler);
