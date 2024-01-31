// Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {
  return greeting + " " + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello("Hi", "Grace");
let foo = xyzzy();

// variables: hello, greeting, name, xyzzy, howdy, foo
// object property names: a, b, c, d, array indexes 0, 1, 2
// primitive values: " ", 1, 2, 3, 4, 5, "Hi", "Grace", object keys 'a', 'b', 'c', 'd', array indexes 0, 1, 2
// objects: function hello(), function xyzzy(), { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5] , {}
