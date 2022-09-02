// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant
// cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

/**
 * Use replace() on the string, using a regular expression to check if the first letter is a consonant
 * and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
 * 
 * Use replace() again to check for consonants at the beginning of the word and to move it or them to
 * the end of the word and add ay at the end.
 * @param {English words in all lowercase} str 
 * @returns provided string as Pig Latin
 */
function translatePigLatin(str) {
  return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant"));  // onsonantcay
console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove"));  // oveglay
console.log(translatePigLatin("algorithm"));  // algorithmway
console.log(translatePigLatin("eight"));  // eightway
console.log(translatePigLatin("schwartz"));  // artzschway
console.log(translatePigLatin("rhythm"));  // rhythmay
