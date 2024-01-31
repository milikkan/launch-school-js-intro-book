// What gets returned by y++ in the second snippet, and why?

// > let y = "5"
// > y++

let y = "5";
console.log(y++);

// it returns 5 because postfix increment operator first returns the operand
// and then increments its operand by 1
// the return value would be numeric 5 rather than string '5',
// because post incerement operator coerces the string into a number.
// if we log the value of y again, we would get 6

console.log(y);
