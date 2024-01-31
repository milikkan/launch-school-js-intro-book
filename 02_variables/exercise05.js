// What does this program log to the console? Why?

let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

// it prints 'bar'. The value of foo variable is 'bar'.
// inside the block, a new foo variable is created that is only visible from within that block.
// outside the block, we access only the foo created at the outer scope.
