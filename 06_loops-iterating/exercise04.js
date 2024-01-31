// Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// code doesn't produce an error
// there is no error in the code.
// Even though the increment part is missing, the loop variable i is incremented from inside the
// loop block, inside the console.log method call.
// console.log method both increments the i value by one and prints the result of the assignment expression,
// which is the incremented value of i.
// Code outputs:
// 1
// 2
// 3
// 4
// 5
