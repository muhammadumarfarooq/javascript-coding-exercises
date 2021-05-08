// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const handleReverseString = (str) => {
  return str.split("").reduce((prev, curr) => curr + prev, "");
};

// Solution # 1 (**)

// function reverseInt(n) {
//   const numberToString = String(n);
//   if ( Math.sign(n) === -1 ) {
//     const stringWithoutNegativeSign = numberToString.slice(1, numberToString.length);
//     const reversedStringWithNegativeSign = "-" + handleReverseString(stringWithoutNegativeSign);
//     return Number(reversedStringWithNegativeSign);
//   } else {
//     return Number(handleReverseString(numberToString));
//   }
// }

// Solution # 2 (I think this is more ideal)
function reverseInt(n) {
  const reversed = handleReverseString(n.toString());
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
