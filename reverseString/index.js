// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*Solution 1 */
// function reverse(str) {
//   const stringLength = str.length;
//   const reverseStringArray = [];
//   for ( let i = stringLength - 1; i >= 0; i-- ) {
//     reverseStringArray.push(str[i]);
//   }
//   return reverseStringArray.join("");
// }

//Solution 2
function reverse(str) {
  return str.split("").reverse().join("");
}

module.exports = reverse;
