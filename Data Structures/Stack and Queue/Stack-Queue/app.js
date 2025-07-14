const stack = require('./Stack');
const queue = require('./Queue');
let Stack1 = new stack()

// Stack1.Push(10);
// Stack1.Push(20);
// Stack1.Push(30);


// console.log(Stack1.Pop())
// console.log(Stack1.Peek())
// console.log(Stack1)
// console.log("--------------------------")
// console.log(Stack1.Pop())
// console.log(Stack1.Peek())
// console.log(Stack1)
// console.log("--------------------------")
// console.log(Stack1.Pop())
// console.log(Stack1.Peek())
// console.log(Stack1)


let Queue1 = new queue();

Queue1.Enqueue(10);
Queue1.Enqueue(15);
Queue1.Enqueue(20);
Queue1.Enqueue(30);


console.log(Queue1.Peek())
console.log(Queue1.Dequeue())
console.log(Queue1.Dequeue())
console.log(Queue1.Dequeue())
console.log(Queue1.isEmpty())
console.log(Queue1.Dequeue())
console.log(Queue1.isEmpty())