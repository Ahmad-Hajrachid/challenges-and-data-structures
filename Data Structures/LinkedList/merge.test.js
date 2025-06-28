const linkedList = require('./LinkedList');
const merge = require('./MergeSorted/merge')

test('Testing merging two already sorted linked lists where one of them is empty',()=>{
    let list1 = new linkedList()
    let list2 = new linkedList()

    list2.add(1)
    list2.add(2)
    list2.add(3)
    list2.add(4)

    let MergedList = merge(list1,list2)
    expect(MergedList.printList()).toBe("Head -> 1 -> 2 -> 3 -> 4 -> Null")
})

test('Testing merging two already sorted linked lists where both of them are empty',()=>{
    let list1 = new linkedList()
    let list2 = new linkedList()


    let MergedList = merge(list1,list2)
    expect(MergedList).toBe(null)
})

test('Testing merging two already sorted linked lists where duplicated data exists',()=>{
    let list1 = new linkedList()
    let list2 = new linkedList()

    list1.add(1);
    list1.add(2);
    list1.add(5);
    list1.add(5);

    list2.add(3);
    list2.add(5);
    list2.add(5);
    list2.add(20);

    let MergedList = merge(list1,list2)
    expect(MergedList.printList()).toBe("Head -> 1 -> 2 -> 3 -> 5 -> 5 -> 5 -> 5 -> 20 -> Null")
})