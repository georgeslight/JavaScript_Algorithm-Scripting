// One of the simplest and most widely known ciphers is a Caesar cipher, also
// known as a shift cipher. In a shift cipher the meanings of the letters are
// shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the
// letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and
// returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let result = "";

  for (let i in str) {
    if ((/[^a-zA-Z]/).test(str[i])) {
      result = result.concat(str[i]);
      continue;
    }
    if (str.charCodeAt(i) - 13 < 65) {
      result = result.concat(String.fromCharCode(str.charCodeAt(i) - 13 + 26));
      continue;
    }
    result = result.concat(String.fromCharCode(str.charCodeAt(i) - 13));
  }
  return result;  
}

console.log(rot13("SERR PBQR PNZC"));  // FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));  // FREE PIZZA!
console.log(rot13("SERR YBIR?"));  // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));  // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
