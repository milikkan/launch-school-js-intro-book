function everOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Invalid integer.");
    return;
  }
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

everOrOdd(44);
everOrOdd(101);
everOrOdd("hello");
everOrOdd(3.14);
