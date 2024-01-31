let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  return arr.map((str) => str.length).filter((len) => len % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
