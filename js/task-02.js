function createCategoryList() {
  const ingredientsList = document.getElementById("ingredients");

  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const items = ingredients.map((ingredient) => {
    const el = document.createElement("li");
    el.textContent = ingredient;
    el.classList.add("item");
    return el;
  });

  items.length
    ? ingredientsList.append(...items)
    : (ingredientsList.innerHTML = "<li>Arrey is empty</li>");
}
createCategoryList();
