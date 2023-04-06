const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

function randomColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", randomColor);
