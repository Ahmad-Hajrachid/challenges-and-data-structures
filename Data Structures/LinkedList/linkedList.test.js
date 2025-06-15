const list = require("./LinkedList")


    //This test is done
    test("Adding a node to the end of the linked list",()=>{
        const Newlist = new list()
        Newlist.add(5)
        Newlist.add(10)
        Newlist.add(20)

        expect(Newlist.head.data).toBe(5)
        expect(Newlist.head.next.data).toBe(10)
        expect(Newlist.head.next.next.data).not.toBe(21)
    })



    test("Removing node based on a specific data",()=>{
        const newlist = new list();
        const new2list = new list();
        newlist.add(5);
        newlist.add(10);
        newlist.remove(5)
        expect(newlist.remove(6)).toBe(false);
        expect(newlist.head.data).toBe(10)
        // removing from empty list:
        expect(new2list.remove(10)).toBe(false);
    })



    //this test is done
    test("include",()=>{
        const newlist = new list();
        newlist.add(10);
        expect(newlist.includes(10)).toBe(true)
        expect(newlist.includes(12)).toBe(false)

    })

    //this test is done
    test("inserting a node at specific index",()=>{
        const newlist = new list();
        newlist.add(10)
        newlist.add(15)
        newlist.insertAt(20,1)
        expect(newlist.head.next.data).toBe(20)
        expect(newlist.insertAt(20,4)).toBe(false)
    })
  