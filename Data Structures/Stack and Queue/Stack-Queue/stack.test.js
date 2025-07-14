const stack = require('./Stack');

test("Pushing a node onto a stack.",()=>{
    let Stack = new stack();
    Stack.Push(10)
    expect(Stack.top.data).toBe(10)
})

test("Pushing null into a stack.",()=>{
    let Stack = new stack();
    
    expect(Stack.Push(null)).toBe("Can't push null or undefined")
})

test("popping a node from a stack.",()=>{
    let Stack = new stack();
    Stack.Push(10)
    Stack.Push(20)
    Stack.Push(30)
    expect(Stack.Pop()).toBe(30)
})

test("popping a node from an empty stack.",()=>{
    let Stack = new stack();
    expect(Stack.Pop()).toBe("This stack is empty.")
})

test("Peeking a node from a stack.",()=>{
    let Stack = new stack();
    Stack.Push(10)
    Stack.Push(20)
    Stack.Push(30)
    expect(Stack.Peek()).toBe(30)
})

test("Peeking a node from an empty stack.",()=>{
    let Stack = new stack();
    expect(Stack.Peek()).toBe("Stack is empty")
})

test("Testing if a stack is empty using an empty stack.",()=>{
    let Stack = new stack();
    expect(Stack.isEmpty()).toBe(true)
})

test("Testing if a stack is empty using a non empty stack.",()=>{
    let Stack = new stack();
    Stack.Push(10)
    Stack.Push(20)
    Stack.Push(30)
    expect(Stack.isEmpty()).toBe(false)
})