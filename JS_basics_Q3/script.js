// Create an object with fruit names and their corresponding colors
const fruits = {
  Apple: "Red",
  Banana: "Yellow",
  Cherry: "Red",
  Date: "Brown",
  Elderberry: "Purple",
};

// Use a FOR/IN loop to iterate over the object's properties
for (const fruit in fruits) {
  console.log(`Fruit: ${fruit}, Color: ${fruits[fruit]}`);
}
