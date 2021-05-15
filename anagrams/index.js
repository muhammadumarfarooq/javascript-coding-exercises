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
  
  const charMapStringA = buildCharMap(stringA);
  const charMapStringB = buildCharMap(stringB);
  
  if ( Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length ) {
    return false;
  }
  
  for ( let key in charMapStringA ) {
    if ( charMapStringA[key] !== charMapStringB[key] ) {
      return false;
    }
  }
  
  return true;
}

function buildCharMap(string) {
  const charMap = {};
  const regx = /[^\w]/g;
  const formattedString = string.replace(regx, "").toLowerCase();
  
  for ( let char of formattedString ) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  
  return charMap;
}

module.exports = anagrams;
