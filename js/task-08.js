const form = document.querySelector(".login-form");

function formHandler(e) {
  e.preventDefault();
  const inputArr = Array.from(this.getElementsByTagName("input"));

  const userObj = inputArr.reduce((previousValue, input) => {
    if (!input.value.trim()) return false;
    return {
      ...previousValue,
      [input.name]: input.value,
    };
  }, {});

  !userObj ? alert("Все поля должны быть заполнены") : console.log(userObj);
}

form.addEventListener("submit", formHandler);
