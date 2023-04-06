function simpleValidation() {
  const field = document.getElementById("validation-input");

  field.addEventListener("blur", function () {
    const isTrue = this.value.trim().length ? true : false;
    this.classList.toggle("valid", isTrue);
    this.classList.toggle("invalid", !isTrue);
  });
}
simpleValidation();
