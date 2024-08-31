// Create an array of fruit names
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Function to render the fruit list
function renderFruitList() {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = "";
  fruits.forEach((fruit) => {
    const listItem = document.createElement("li");
    listItem.textContent = fruit;
    fruitList.appendChild(listItem);
  });
}

// Function to sort the fruit array in descending order
function sortFruitsDescending() {
  fruits.sort((a, b) => b.localeCompare(a));
  renderFruitList();
}

// Add event listener to the sort button
document
  .getElementById("sort-button")
  .addEventListener("click", sortFruitsDescending);

// Initial render of the fruit list
renderFruitList();
