// What does the following code log to the console?

function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");

// it doesn't log anything. Before the console.log() method, there is a return statement.
// As soon as the return statement executed, the function returns its value and the execution of
// the program returns to the point where the function was invoked. Since the log method comes after
// return, it is not being run.
