function input_handler() {
  const inputEl = document.getElementById("name-input");
  const content = document.getElementById("name-output");

  inputEl.addEventListener("change", function () {
    const val = this.value.trim();

    val !== ""
      ? (content.textContent = this.value)
      : (content.textContent = "Anonymous");
  });
}
input_handler();
