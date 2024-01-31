// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

// it logs:
// Product2
// Product3
// Product not found!
// Since there is no bread after case statements, the switch statement will fall through after the matching case
// and continue executing until it encounters a break.
// Since there is no break statement, all the cases and default block will be executed.
