// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  const conversion = {
    'M' : 1_000,
    'CM': 900,
    'D' : 500,
    'CD': 400,
    'C' : 100,
    'XC': 90,
    'L' : 50,
    'XL': 40,
    'X' : 10,
    'IX': 9,
    'V' : 5,
    'IV': 4,
    'I' : 1
    }

    let roman = '';
    for (let i in conversion) {
      while (num >= conversion[i]) {
        roman += i;
        num -= conversion[i];
      }
    }

 return roman;
}

console.log(convertToRoman(2));  // II
console.log(convertToRoman(3));  // III
console.log(convertToRoman(4));  // IV
console.log(convertToRoman(5));  // V
console.log(convertToRoman(9));  // IX
console.log(convertToRoman(12));  // XII
console.log(convertToRoman(16));  // XVI
console.log(convertToRoman(29));  // XXIX
console.log(convertToRoman(36));  // XXXVI
console.log(convertToRoman(44));  // XLIV
console.log(convertToRoman(45));  // XLV
console.log(convertToRoman(68));  // LXVIII
console.log(convertToRoman(83));  // LXXXIII
console.log(convertToRoman(97));  // XCVII
console.log(convertToRoman(99));  // XCIX
console.log(convertToRoman(400));  // CD
console.log(convertToRoman(500));  // D
console.log(convertToRoman(501));  // DI
console.log(convertToRoman(649));  // DCXLIX
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(891));  // DCCCXCI
console.log(convertToRoman(1_000));  // M
console.log(convertToRoman(1_004));  // MIV
console.log(convertToRoman(1_006));  // MVI
console.log(convertToRoman(1_023));  // MXXIII
console.log(convertToRoman(2_014));  // MMXIV
console.log(convertToRoman(3_999));  // MMMCMXCIX