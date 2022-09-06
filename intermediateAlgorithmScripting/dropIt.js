// Given the array arr, iterate through and remove each element starting from
// the first element (the 0 index) until the function func returns true when
// the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.

function dropElements(arr, func) {
  return arr.map((elem, index) => {
    if (func(elem) === true) return arr.slice(index, arr.length);
  }).filter(arr => arr !== undefined)[0] || [];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));  // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))  // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));  // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));  // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));  // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));  // [3, 9, 2]