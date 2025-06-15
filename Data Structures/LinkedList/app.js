const list = require("./LinkedList");

let listOne = new list();

// listOne.add(4);
// listOne.add(5);
// listOne.add(12);
// listOne.add(12);
// listOne.add(12);
// console.log("this is the length before the remove",listOne.length)
// listOne.remove(4)
// listOne.remove(12)
// console.log("this is the length after the remove: ",listOne.length)
// listOne.printList()
// console.log(listOne.includes(11))
listOne.add(10)
listOne.add(15)
listOne.insertAt(20,1)
listOne.printList()
listOne.remove(6)
listOne.remove(10)
listOne.printList()