// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const regx = /[^\w]/g;
  const formattedStringA = stringA.replace(regx, "").toLowerCase();
  const formattedStringB = stringB.replace(regx, "").toLowerCase();
  
  if ( formattedStringA.length !== formattedStringB.length )
    return false;
  
  const charMapStringA = {};
  const charMapStringB = {};
  for ( let char of formattedStringA ) {
    charMapStringA[char] = charMapStringA[char] + 1 || 1;
  }
  
  for ( let char of formattedStringB ) {
    charMapStringB[char] = charMapStringB[char] + 1 || 1;
  }
  
  let isStringAAnagrams = false;
  let isStringBAnagrams = false;
  
  for ( let key in charMapStringA ) {
    isStringAAnagrams = charMapStringA[key] === charMapStringB[key];
  }
  
  for ( let key in charMapStringB ) {
    isStringBAnagrams = charMapStringB[key] === charMapStringA[key];
  }
  
  return isStringAAnagrams && isStringBAnagrams;
  
}

module.exports = anagrams;
