let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((acc, num) => num * num + acc, 0);
}

console.log(sumOfSquares(array)); // => 83
