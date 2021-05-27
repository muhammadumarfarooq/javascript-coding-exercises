// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution 1 (**)
// function steps(n) {
//   for ( let row = 1; row <= n; row++ ) {
//     let str = "";
//     for ( let column = 1; column <= n; column++ ) {
//       str += column <= row ? "#" : " ";
//     }
//     console.log(str, str.length);
//   }
// }

function steps(n, row = 0, str = "") {
  if ( n === row ) {
    return;
  }
  
  if ( n === str.length ) {
    console.log(str);
    steps(n, row + 1);
    return;
  }
  
  const add = str.length <= row ? "#" : " ";
  steps(n, row, str + add);
}

module.exports = steps;
