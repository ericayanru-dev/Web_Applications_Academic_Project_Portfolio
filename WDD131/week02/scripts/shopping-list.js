const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  const itemText = input.value;
  input.value = '';

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  span.textContent = itemText;
  deleteButton.textContent = "Delete";

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);

  deleteButton.addEventListener("click", function() {
    list.removeChild(listItem);
  });

  input.focus();
}

button.addEventListener("click", addItem);