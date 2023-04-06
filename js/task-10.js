const controls = document.querySelector("#controls");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  let amount = +controls.querySelector("input").value;
  let size = 0;
  while (amount) {
    amount--;
    console.log(amount);
    size += 30;
    const color = getRandomHexColor();
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;
    boxes.appendChild(div);
  }
}

function removeBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", removeBoxes);
