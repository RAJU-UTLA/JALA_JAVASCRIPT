// Create a button element
const button = document.createElement("button");
button.textContent = "Show Current Date and Time";

// Add the button to the page
document.body.appendChild(button);

// Create a paragraph element to display the date and time
const displayElement = document.createElement("p");
document.body.appendChild(displayElement);

// Add an event listener to the button
button.addEventListener("click", () => {
  // Get the current date and time
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateText = currentDate.toLocaleDateString();

  // Display the current date and time
  const displayText = `Current Date and Time: ${currentDateText} ${currentTime}`;
  displayElement.textContent = displayText;
});
