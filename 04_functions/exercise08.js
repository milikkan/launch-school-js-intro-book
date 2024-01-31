// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// it logs:
// 42
// 3.1415

// We can pass extra arguments to a function and JavaScript will not complain about it.
// Redundant arguments are ignored.
