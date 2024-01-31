// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

function allMatches(arr, regexp) {
  return arr.filter((str) => regexp.test(str));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
