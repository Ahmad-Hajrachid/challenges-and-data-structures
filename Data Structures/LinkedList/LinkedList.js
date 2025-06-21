const Node = require("./ObjectNode");

class LinkedList{
    
    constructor(){
        this.head = null;
        this.length =0;
    }

    add(data){
        const newNode = new Node(data);
        
        if(this.head===null){
            this.head = newNode;
        }
        else {
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next= newNode;
        }
        this.length++
    }

    remove(data){
        
        let currentNode=this.head;
        let lastNode;

        if(!currentNode){
            return false;
        }

        if(currentNode.data ===data){
            this.head = currentNode.next;
            this.length--;
            return true;
        }
        
        while(currentNode !==null && currentNode.data !==data){
            lastNode = currentNode;
            currentNode= currentNode.next
        }
        if(currentNode ===null){
            return false
        }
        lastNode.next =currentNode.next;
        this.length--;
        return true
        }
        
    

    includes(data){
        let currentNode = this.head;
        
            while(currentNode !== null){
                
                if(currentNode.data === data ){
                    return true
                }
                currentNode = currentNode.next;
            }
            return false;
            
    }

    insertAt(data,index){
        let node = new Node(data);
        let currentNode = this.head;
        let lastNode;
        let currentIndex = 0;

        if(index>this.length){
            return false
        }

        if(index === 0){
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index){
                currentIndex++;
                lastNode = currentNode;
                currentNode = currentNode.next
            }
            node.next = currentNode;
            lastNode.next = node;
        }
        this.length++
    }

    removeAt(index){
        let currentIndex=0;
        let currentNode = this.head;
        let lastNode;

        if(index <0 || index >= this.length){
            return null
        }
        if(index === 0){
            this.head = currentNode.next;
        } else {
        while(currentIndex<index){
            currentIndex++;
            lastNode = currentNode;
            currentNode = currentNode.next;
        }
        lastNode.next = currentNode.next
        }
        this.length--;
        return currentNode.data;
    }

    Reverse(){
        let currentNode = this.head;
        let previousNode = null;
        let placeHolder;

        if(this.head === null){
            return false;
        }

        while(currentNode !==null){
            placeHolder = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = placeHolder; 

        }
        this.head = previousNode;
        
    }

    printList(){
        let currentNode = this.head;
        let list = "Head -> ";
        if(currentNode === null){
            console.log("Head -> Null")
            console.log("List is empty");
            return null;
        }

        while(currentNode !==null){
            list+=`${currentNode.data} -> `;
            currentNode= currentNode.next;
        }
        list += "Null"
        console.log(list)
        return list
    }

}

module.exports = LinkedList;