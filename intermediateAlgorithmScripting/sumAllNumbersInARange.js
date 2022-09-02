// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number will not
// always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the
// numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  const maxVal = arr[1];
  const minVal = arr[0];
  for (let i = minVal; i <= maxVal; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));  // should return 10.
console.log(sumAll([4, 1]));  // should return 10.
console.log(sumAll([5, 10]));  // should return 45.
console.log(sumAll([10, 5]));  // should return 45.