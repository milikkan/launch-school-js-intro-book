function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(2)); // false
console.log(isNotANumber(0 / 0)); // true
console.log(isNotANumber("aaa")); // false

console.log(isNotANumber(null));
