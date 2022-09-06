// Find the smallest common multiple of the provided parameters that can be
// evenly divided by both, as well as by all sequential numbers in the range
// between these parameters.

// The range will be an array of two numbers that will not necessarily be in
// numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1
// and 3 that is also evenly divisible by all numbers between 1 and 3. The answer
// here would be 6.

function smallestCommons(arr) {
  // get the max and the min values in the array
  const max = Math.max(...arr);
  let min = Math.min(...arr);
  const numArr = [];

  // create a array with all the values between min and max
  for (min; min <= max; min++) {
    numArr.push(min);
  }

  // checks whether or not a variable being passed in (n) can be divisible by a second variable (currentValue) and leave no remainder
  const smallestCommon = curr => n % curr === 0;


  // set a variable as false
  // if true, it breaks the loop and returns us a number that is going to be our answer
  let common = false;

  // Now knowing that the smallest possible number divisible by all the other numbers could be the maximum number in the array * (itself-1) we set that as the lowest value to be checked
  let n = max * (max - 1);

  // tests whether all elements in the array pass the test
  common = numArr.every(smallestCommon);

  // check every time a value is passed in whether or not the .every() method has changed common to true
  // increment n before the test, as if we do it afterwards our n value with be 1 more than our desired result
  while (common === false) {
    n++;
    common = numArr.every(smallestCommon);
  }

  // when common === true the loop stops and n will be our Lowest common 
  return n;
}

console.log(smallestCommons([1,5]));  // 60
console.log(smallestCommons([5,1]));  // 60
console.log(smallestCommons([2,10]));  // 2520
console.log(smallestCommons([1,13]));  // 360360
console.log(smallestCommons([23,18]));  // 6056820