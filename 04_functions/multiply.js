let rlSync = require("readline-sync");

function multiply(num1, num2) {
  return num1 * num2;
}

function getNumber(prompt) {
  return Number(rlSync.question(prompt));
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");

console.log(
  `${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`
);
