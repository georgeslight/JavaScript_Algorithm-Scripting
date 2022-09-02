// Perform a search and replace on the sentence using the arguments provided
// and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are
// replacing it. For example if you mean to replace the word Book with the word
// dog, it should be replaced as Dog

function myReplace(str, before, after) {
  after = after.split("");

  if (before.split("")[0] === before.split("")[0].toUpperCase()) {
    after[0] = after[0].toUpperCase();
  } else {
    after[0] = after[0].toLowerCase();
  }
  
  return str.replace(before, after.join(""));
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));  // A quick brown fox leaped over the lazy dog
console.log(myReplace("Let us go to the store", "store", "mall")); // Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));  // He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down"));  // I think we should look down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));  // This has a spelling error
console.log(myReplace("His name is Tom", "Tom", "john"));  // His name is John
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));  // Let us get back to more Algorithms
