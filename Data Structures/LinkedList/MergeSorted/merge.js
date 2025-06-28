const list = require('../LinkedList');

function merge(ListOne,ListTwo){
        let current1 = ListOne.head;
        let current2 = ListTwo.head;
        let newList = new list();
        
        if(ListOne.length ===0 && ListTwo.length ===0){
            console.log("Merged lists are empty")
            return null
        }

        while(current1 !==null && current2 !==null){
            if(current1.data < current2.data){
                newList.add(current1.data);
                current1 = current1.next;
            }else if(current2.data < current1.data) {
                newList.add(current2.data);
                current2 = current2.next;
            } else {
                newList.add(current1.data);
                newList.add(current2.data);
                current1 = current1.next;
                current2 = current2.next;
            }
        }

        while(current1 !==null) {
            newList.add(current1.data);
            current1=current1.next;
        }

        while(current2 !== null){
            newList.add(current2.data);
            current2 = current2.next;
        }
        return newList
    }


let list1 = new list();
let list2 = new list();

list1.add(5);
list1.add(10);
list1.add(15);

list2.add(3);
list2.add(5);
list2.add(5);
list2.add(20);

const merged = merge(list1,list2)

merged.printList()

module.exports = merge;