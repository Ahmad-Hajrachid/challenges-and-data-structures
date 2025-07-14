const Queue = require('./Queue')

test("Enqueuing a node into a queue",()=>{
    let queue = new Queue();
    queue.Enqueue(10)
    expect(queue.front.data).toBe(10)
})

test("Enqueuing an null into a queue",()=>{
    let queue = new Queue();
    expect(queue.Enqueue()).toBe("Can't enqueue null or undefined")
})

test("Dequeuing a node from a queue",()=>{
    let queue = new Queue();
    queue.Enqueue(10)
    queue.Enqueue(20)
    queue.Enqueue(30)
    expect(queue.Dequeue()).toBe(10)
})

test("Dequeuing a node from an empty queue",()=>{
    let queue = new Queue();
    expect(queue.Dequeue()).toBe("This is an empty queue.")
})


test("Checking if a queue is empty where it is empty.",()=>{
    let queue = new Queue();
    queue.Enqueue(10)
    expect(queue.isEmpty()).toBe(false)
})

test("Checking if a queue is empty where it is not empty.",()=>{
    let queue = new Queue();
    expect(queue.isEmpty()).toBe(true)
})

test("Peeking a node from a queue",()=>{
    let queue = new Queue();
    queue.Enqueue(10)
    queue.Enqueue(20)
    queue.Enqueue(30)
    expect(queue.Peek()).toBe(10)
})

test("Peeking a node from an empty queue",()=>{
    let queue = new Queue();
    expect(queue.Peek()).toBe("This queue is empty.")
})