'use strict';

// Complete this algo
//RECURSIVE
const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  if (array[midPoint] === target) {
    return true;
  } else if (array.length <= 1 && array[midPoint] !== target) {
    return false;
  }
  if (array[midPoint] > target) {
    let newArray = array.slice(0, midPoint);
    return binarySearch(newArray, target);
  } else {
    let newArray = array.slice(midPoint + 1);
    return binarySearch(newArray, target);
  }
};

//WHILE LOOP
const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  let newArray = array;
  while (newArray[midPoint] !== target) {
    if (newArray.length <= 1) {
      return false;
    } else if (newArray[midPoint] > target) {
      newArray = newArray.slice(0, midpoint);
    } else {
      newArray = newArray.slice(midPoint + 1);
    }
    midPoint = Math.floor(newArray.length / 2);
  }
  return true;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
