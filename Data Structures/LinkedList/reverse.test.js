const Linkedlist = require('./LinkedList')


test("Testing reversing a linked list:",()=>{
    let List = new Linkedlist()
    List.add(1)
    List.add(2)
    List.add(3)
    List.add(4)
    List.add(5)
    // We test the list before reversing first:
    expect(List.printList()).toBe("Head -> 1 -> 2 -> 3 -> 4 -> 5 -> Null")
    List.Reverse()
    expect(List.printList()).toBe("Head -> 5 -> 4 -> 3 -> 2 -> 1 -> Null")
    
})

test("Testing reversing an empty linked list",()=>{
    let List = new Linkedlist()
    List.Reverse()
    expect(List.printList()).toBe(null)
})

test("Testing reversing a linked list with one node",()=>{
    let List = new Linkedlist()
    List.add(10)
    List.Reverse()
    expect(List.printList()).toBe("Head -> 10 -> Null")
})

test("Testing reversing a linked list that has duplicated values",()=>{
    let List = new Linkedlist()
    List.add(1)
    List.add(20)
    List.add(20)
    List.add(10)
    List.add(20)
    List.add(5)
    // before the reverse: "Head -> 1 -> 20 -> 20 -> 10 -> 20 -> 5 -> Null"
    List.Reverse()
    expect(List.printList()).toBe("Head -> 5 -> 20 -> 10 -> 20 -> 20 -> 1 -> Null")   

})