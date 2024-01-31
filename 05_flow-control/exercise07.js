function upperCaseLongStrings(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

function upperCaseLongStrings2(str) {
  return str.length > 10 ? str.toUpperCase() : str;
}

console.log(upperCaseLongStrings("hello world"));
console.log(upperCaseLongStrings("goodbye"));

console.log(upperCaseLongStrings2("hello world"));
console.log(upperCaseLongStrings2("goodbye"));
