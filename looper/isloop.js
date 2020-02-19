'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    // console.log('LINKED LIST', linkedlist)
    // console.log('NODE EQUALS', linkedlist.head === linkedlist.head)

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
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop