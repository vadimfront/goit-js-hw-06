function counter() {
  const decrement = document.querySelector("[data-action=decrement]");
  const increment = document.querySelector("[data-action=increment]");
  const content = document.querySelector("#value");

  console.log(decrement);
  let counterValue = 0;
  decrement.addEventListener("click", (event) => {
    content.textContent = counterValue ? --counterValue : 0;
  });
  increment.addEventListener("click", (event) => {
    content.textContent = ++counterValue;
  });
}
counter();
