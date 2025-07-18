const stack = require('./Stack');
const queue = require('./Queue');
const deleteMiddle = require('../DeleteMiddleElement/deleteMiddle')
let Stack1 = new deleteMiddle()

Stack1.Push(7);
Stack1.Push(14);
Stack1.Push(3);
Stack1.Push(8);
Stack1.Push(5);

console.log("Before:", Stack1.display()); //
Stack1.deleteMiddle();
console.log("After:", Stack1.display());
console.log("--------------------------------")
Stack1.Push(2);
Stack1.Push(9);
Stack1.Push(11);
console.log("Before:", Stack1.display()); //
Stack1.deleteMiddle();
console.log("After:", Stack1.display());
