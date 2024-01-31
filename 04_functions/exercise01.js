// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// this code outputs 1
// execution of the foo() function doesn't affect the output
// variable bar is defined using let statement inside the body of the foo() function,
// therefore, this var variable has a function scope and is different from the bar that is
// defined in the outer scope. The bar variable inside foo() is invisible outside the function and
// since it is a new variable declaration, it doesn't affect the other bar, it just shadows it
// inside the function body.
