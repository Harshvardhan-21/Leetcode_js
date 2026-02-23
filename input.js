// Importing the module
const readline = require("readline-sync");

// Enter the number
let a = Number(readline.question());
let number = [];

// Creating map
let map = new Map();
for (let i = 0; i < a; ++i) {
  let number = Number(readline.question());
  if (map.has(number)) {
    map.set(number, map.get(number) + 1);
  } else {
    map.set(number, 1);
  }
}

console.log(map);