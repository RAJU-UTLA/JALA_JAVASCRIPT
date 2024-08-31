let count = 0;

const counterElement = document.getElementById("counter");
const countButton = document.getElementById("count-btn");

countButton.addEventListener("click", () => {
  count++;
  counterElement.textContent = count.toString();
});
