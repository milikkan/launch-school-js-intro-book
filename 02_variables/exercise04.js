// What happens when you run the following code? Why?

const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

// program will log the result of first 3 console.log functions,
// then it will give an error because a variable created with const statement
// cannot be reassigned.
