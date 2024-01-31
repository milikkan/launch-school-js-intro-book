let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// function copyObj(obj, keys) {
//   if (!keys) {
//     return Object.assign({}, obj);
//   }
//   return keys.reduce((acc, key) => {
//     let value = obj[key];
//     acc[key] = value;
//     return acc;
//   }, {});
// }

function copyObj(obj, keys) {
  let result = {};
  if (!keys) {
    return Object.assign(result, obj);
  } else {
    keys.forEach(function (key) {
      result[key] = obj[key];
    });
    return result;
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

console.log(objToCopy);
