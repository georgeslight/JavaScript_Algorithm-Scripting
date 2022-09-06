// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const flatArr = [];
  
  arr.forEach((_, index) => Array.isArray(arr[index]) ? flatArr.push(...steamrollArray(arr[index])) : flatArr.push(arr[index]));

  return flatArr;
};

console.log(steamrollArray([[["a"]], [["b"]]]));  // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]]));  // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]]));  // [1, 3, 4]
  console.log(steamrollArray([1, {}, [3, [[4]]]]));  // [1, {}, 3, 4]