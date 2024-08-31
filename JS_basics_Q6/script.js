// Strict mode is enabled
"use strict";

function example() {
  undeclaredVariable = 10; // This will throw an error in strict mode
}

example();

// "use strict";

// function example() {
//   let declaredVariable = 10; // This is fine
// }

// example();
