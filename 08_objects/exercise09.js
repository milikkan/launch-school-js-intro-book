// What does the following program log to the console? Why?

let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// logs: 'hi' and 'hello'
// objects are mutable. When we pass foo argument to the bar function, we pass the reference of the
// object that the foo variable has. Inside the function, object is mutated.
// Strings are primitives and they are immutable. Even though we reassign it inside the function,
// the change isn't reflected on the qux variable that we passed to the function as the argument.
