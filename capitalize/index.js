// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution 1 (**)
function capitalize(str) {
  const strArray = str.split(" ");
  const newArray = [];
  for ( let word of strArray ) {
    const firstLetter = word[0].toUpperCase();
    const wordWithoutFirstLetter = word.slice(1);
    const capitalizedWord = firstLetter + wordWithoutFirstLetter;
    newArray.push(capitalizedWord);
  }
  return newArray.join(" ");
}

module.exports = capitalize;
