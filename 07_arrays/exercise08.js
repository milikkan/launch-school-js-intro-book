let arr = ["a", "abcd", "abcde", "abc", "ab", "a", "aaaaaaa"];

function oddLengths(arr) {
  return arr.reduce((acc, str) => {
    if (str.length % 2 === 1) {
      acc.push(str.length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
