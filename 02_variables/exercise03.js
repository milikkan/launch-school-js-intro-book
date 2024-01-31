// What happens when you run the following program? Why do we get that result?

{
  let foo = "bar";
}

console.log(foo);

// It results in error (ReferenceError) because, foo variable is declaread and initialized inside a block with
// let statement and there it is block scoped. It cannot be accesed from outside the block.
