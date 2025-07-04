const linkedList = require('./LinkedList');

test("Testing rotating a linked list",()=>{
    let list = new linkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateK(2)
    expect(list.printList()).toBe("Head -> 3 -> 4 -> 5 -> 6 -> 1 -> 2 -> Null")
})

test("Testing rotating a linked list where k is equal to zero.",()=>{
    let list = new linkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateK(0)
    expect(list.printList()).toBe("Head -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> Null")
})

test("Testing rotating a linked list where k is greater than the length of the linked list.",()=>{
    let list = new linkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateK(7)
    expect(list.printList()).toBe("Head -> 2 -> 3 -> 4 -> 5 -> 6 -> 1 -> Null")
})

test("Testing rotating a linked list where k is equal to a negative number.",()=>{
    let list = new linkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateK(-2)
    expect(list.printList()).toBe("Head -> 4 -> 5 -> 6 -> 1 -> 2 -> 3 -> Null")
})


test("Testing rotating a linked list where k is equal to a negative number in which it's absolute value is going to be greater than the length of the list.",()=>{
    let list = new linkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.rotateK(-8)
    expect(list.printList()).toBe("Head -> 4 -> 5 -> 6 -> 1 -> 2 -> 3 -> Null")
})