// Get the form elements
const form = document.getElementById("myForm");
const textBox = document.getElementById("textBox");
const submitButton = document.getElementById("submitButton");

// Add an event listener to the submit button
submitButton.addEventListener("click", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value of the text box
  const textBoxValue = textBox.value.trim();

  // Check if the text box is empty
  if (textBoxValue === "") {
    // Display an error message if the text box is empty
    alert("Please enter a value in the text box!");
  } else {
    // Submit the form if the text box is not empty
    form.submit();
  }
});
