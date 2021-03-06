// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//
//   const chunked = [];
//
//   array.forEach(number => {
//     const lastElementIndex = chunked.length - 1;
//     const lastElementOfChunkedArray = chunked[lastElementIndex];
//
//     if ( !lastElementOfChunkedArray || ( lastElementOfChunkedArray && lastElementOfChunkedArray.length === size ) ) {
//       chunked.push([number]);
//     } else {
//       chunked[lastElementIndex] = [...lastElementOfChunkedArray, number];
//     }
//
//   });
//   return chunked;
// }

//Solution # 2
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  
  while ( index < array.length ) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  console.log(chunked);
  return chunked;
}

module.exports = chunk;
