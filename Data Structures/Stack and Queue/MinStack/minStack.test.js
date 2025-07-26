const MinStack = require('./minStack')

test('Retrieving the minimum element in the stack',()=>{
    const minStack = new MinStack();

    minStack.Push(15)
    minStack.Push(7)
    minStack.Push(12)
    minStack.Push(3)

    expect(minStack.getMin()).toBe(3)
})

test('Retrieving the minimum element in the stack after using the Pop() method',()=>{
    const minStack = new MinStack();

    minStack.Push(15)
    minStack.Push(7)
    minStack.Push(12)
    minStack.Push(3)

    minStack.Pop()

    expect(minStack.getMin()).toBe(7)
})

test('Retrieving the minimum element in the stack after pushing a new minimum value',()=>{
    
    const minStack = new MinStack();

    minStack.Push(15)
    minStack.Push(7)
    minStack.Push(12)
    minStack.Push(3)
    //current min = 3
    minStack.Push(1)

    expect(minStack.getMin()).toBe(1)
})

test('Retrieving the minimum element from an empty stack',()=>{
    const minStack = new MinStack();

    expect(minStack.getMin()).toBe("Stack is empty.")
})

test('Retrieving the minimum element from a stack with only one element',()=>{
    const minStack = new MinStack();
    minStack.Push(1)

    expect(minStack.getMin()).toBe(1)
})