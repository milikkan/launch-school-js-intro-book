// What does the following function do?

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

// it splits the string argument passed to it by the space characters and puts resulting strings in an array
// it reverses the order of the strings in the array
// it maps the array to the length of the strings
// In summary, it returns an array that consists of the lenghts of the strings that are
// seperated by spaces and their order reversed.

console.log(doSomething("a ab abc d"));

// should log [1, 3, 2, 1]
