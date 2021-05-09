// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// //Solution 1 (**)
function maxChar(str) {
  const numberOfCharacters = {};
  
  let maxCharacter = null;
  let numberOftimes = 0;
  
  for ( let character of str ) {
    numberOfCharacters[character] = numberOfCharacters[character] + 1 || 1;
  }
  
  for ( const property in numberOfCharacters ) {
    if ( numberOfCharacters[property] > numberOftimes ) {
      maxCharacter = property;
      numberOftimes = numberOfCharacters[property];
    }
  }
  
  return maxCharacter;
  
}

module.exports = maxChar;
