// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);

// it will output 'Not Empty' to the console.
// Even the argument is an empty array, it is truthy and if block executes rather than else.
