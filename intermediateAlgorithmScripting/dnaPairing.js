// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by
// the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the
// missing base pairs for the provided DNA strand. For each character in the
// provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are
// grouped into one encapsulating array.

function pairElement(str) {
  return str.split("").map(char => char === 'A' ? [char, 'T'] : char === 'T' ? [char, 'A'] : char === 'C' ? [char, 'G'] : [char, 'C']);
}

console.table(pairElement("GCG"));  // [["G", "C"], ["C","G"], ["G", "C"]]
console.table(pairElement("ATCGA"));  // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.table(pairElement("TTGAG"));  // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.table(pairElement("CTCTA"));  // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]