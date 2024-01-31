// Add a qux property with value 3 to the myObj object we created in the previous exercise.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Now, examine the following code snippets.
// Without running this code, can you determine whether these two snippets produce the same output? Why?

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

console.log("-------");

for (let key in myObj) {
  console.log(key);
}

// The two code snippets don't produce the same output.
// Object.keys() method returns the object keys as an array but it doesn't return inherited keys.
// it only returns 'qux' key.
// On the other hand, for/in loop iterates over all keys, inherited and object's own.
