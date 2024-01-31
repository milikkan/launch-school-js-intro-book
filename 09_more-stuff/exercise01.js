// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// it logs [1, 4, 3]
// array2 has a reference to the array object that array1 references.
// When that array is mutated, the change is visible through the array2 variable.
