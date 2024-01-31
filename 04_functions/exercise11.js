// are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber("Enter the first number: ");
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// No they are not same variables. The first pair of left and right variables are function parameters.
// Function parameters are local variables for that function's scope.
// The latter pair of left and right variables are global variables.
