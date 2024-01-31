// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo("Hello");

// it logs:
// "Hello"
// "undefined"

// When a function argument is missing, its value becomes undefined. JavaScript doesn't give any error in this case.
