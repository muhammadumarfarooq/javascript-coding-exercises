// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// //Solution 1 (My solution)
// function palindrome(str) {
//   const strArray = str.split("");
//   const reversed = strArray.reduce((previous, current) => {
//     return current + previous;
//   }, "");
//
//   return reversed === str;
// }

//Solution 2
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
