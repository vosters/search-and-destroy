'use strict';

// Complete this algo
const minJumps = arr => {
  let newArray = [];
  let currentIndex = arr.length - 1;

  while (currentIndex >= 0) {
    for (let i = 0; i <= arr.length; i++) {
      console.log('CurrentIdx:', currentIndex);
      if (arr[i] >= currentIndex - i) {
        console.log('I', i);
        console.log('currenidx - i', currentIndex - i);
        console.log('arrI', arr[i]);
        newArray.push(arr[i]);
        currentIndex = i;
        if (currentIndex === 0) {
          console.log('LENGTH:', newArray.length);
          return newArray.length;
        }
        break;
      }
    }
  }
};

module.exports = minJumps;
