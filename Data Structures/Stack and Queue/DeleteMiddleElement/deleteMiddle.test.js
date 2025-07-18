const deleteMiddle = require('./deleteMiddle')

test("Deleting middle where the stack length is an odd number",()=>{
    let Stack = new deleteMiddle()

    Stack.Push(7);
    Stack.Push(14);
    Stack.Push(3);
    Stack.Push(8);
    Stack.Push(5);
    Stack.deleteMiddle()
    expect(Stack.display()).toBe("Stack: top -> 5 -> 8 -> 14 -> 7")
})

test("Deleting the lower middle where the stack length is an even number",()=>{
    let Stack = new deleteMiddle()
    Stack.Push(7);
    Stack.Push(14);
    Stack.Push(3);
    Stack.Push(8);
    Stack.Push(5);
    Stack.Push(10);
    Stack.deleteMiddle()
    expect(Stack.display()).toBe("Stack: top -> 10 -> 8 -> 3 -> 14 -> 7")
})

test("Deleting middle where the stack length is only one",()=>{
    let Stack = new deleteMiddle()
    Stack.Push(7);
    
    expect(Stack.deleteMiddle()).toBe(`Stack only got one element: (${Stack.top.data})`)
})

test("Deleting middle where the stack length is empty",()=>{
    let Stack = new deleteMiddle()
    expect(Stack.deleteMiddle()).toBe("This stack is empty.")
})