const MinStack = require('./minStack')

const minStack = new MinStack();

minStack.Push(15)
minStack.Push(7)
minStack.Push(12)
minStack.Push(3)
minStack.Push(3)

minStack.printStack()

let min = minStack.getMin()
console.log("Min value is: ",min)

minStack.Pop();

minStack.printStack()

console.log(minStack.getMin())
console.log("--------")
minStack.Pop();

minStack.printStack()

console.log(minStack.getMin())


// let peeked = minStack.Top()
// console.log("Peeked is ",peeked)

// minStack.Push(2);
// minStack.printStack()

// min = minStack.getMin()
// console.log("Min value is: ",min)

// let isEmpty = minStack.isEmpty()
// console.log(isEmpty)