// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Steps to run debugger
// run these command
// node inspect index.js
// cont
// repl
// then write the names of variables and inspect them.


/*Solution 1 (My solution) */
// function reverse(str) {
//   const stringLength = str.length;
//   const reverseStringArray = [];
//   for ( let i = stringLength - 1; i >= 0; i-- ) {
//     reverseStringArray.push(str[i]);
//   }
//   return reverseStringArray.join("");
// }

//Solution 2
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 3
function reverse(str) {
  let reversed = "";
  // for(let i = 0; i < str.length; i++){
  //   reversed = `${str[i]}${reversed}`
  // }
  //using for of loop
  for ( let character of str ) {
    reversed = `${character}${reversed}`;
    debugger;
  }
  
  return reversed;
}

// Solution 3
// function reverse(str) {
//   debugger;
//   return str.split("").reduce((prev, char) => `${char}${prev}`, "");
// }
//
reverse("asdb");

module.exports = reverse;
