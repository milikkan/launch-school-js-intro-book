function multiply(left, right) {
  // multiply: global - left, right: local
  let product = left * right; // product, left, right: local
  return product; // product: local
}

function getNumber(prompt) {
  // getNumber: global, prompt: local
  return parseFloat(question(prompt)); // parseFloat, question: global - prompt: local
}

let left = getNumber("Enter the first number: "); // left, getNumber: global
let right = getNumber("Enter the second number: "); // right, getNumber: global
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console, left, right, multiply: global
