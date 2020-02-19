'use strict';

//Complete this algo
<<<<<<< HEAD
const isLoop = (linkedlist) => {
    let head = linkedlist.head;
    let arr = []

    while (head.next) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === head) {
                return true
            }
        }
        arr.push(head);
        head = head.next
    }

    return false
=======
const isLoop = linkedlist => {
  console.log(linkedlist);
>>>>>>> 2dbecf8821ce655ba29536ef8f9219499cd989b0
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
