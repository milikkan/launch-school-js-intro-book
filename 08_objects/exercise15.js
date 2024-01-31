// Identify all of the variables, object property names, primitive values, and objects in the following code.

function bar(arg1, arg2) {
  let foo = "Hello";
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar("Victor", "Antonina");

// variables
// - bar
// - arg1, arg2
// - foo
// - qux
// - result

// object property names
// - abc, def, ghi,jkl, mno, pqr
// - array indexes: 0, 1, 2, 3 and 0, 1, 2

// primitive values
// - "Hello"
// - object keys: abc, def, ghi,jkl, mno, pqr
// - array indexes: 0, 1, 2, 3 and 0, 1, 2
// - 1, 2, 3, 4, 5, 6
// - null, NaN
// - "Victor"
// - "Antonina"

// objects
// - {abc: [1, 2, 3, [4, 5, 6]], def: null, ghi: NaN, jkl: foo, mno: arg1, pqr: arg2}
// - [1, 2, 3, [4, 5, 6]]
// - [4, 5, 6]
// - function bar()
