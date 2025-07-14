const node = require('./node');

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length=0;
    }

    // Add a node with the specified data to the end of the queue.
    Enqueue(data){
        if(data ===null || data === undefined){
            return "Can't enqueue null or undefined"
        }
        let newNode = new node(data);

        if(this.front ===null){
            this.front = newNode;
            this.back = newNode;
            this.length++;
        }
        else {
            this.back.next = newNode;
            this.back = newNode;
            this.length++;
        }
    }

    // Remove and return the front node from the queue.
    Dequeue(){
        let removedNode = this.front;
        if(!this.front){
            return "This is an empty queue."
        } else {
            this.front = this.front.next;
            this.length--;
            return removedNode.data;
        }
    }

    // Return the front node from the queue without removing it.
    Peek(){
        if(!this.front){
            return "This queue is empty."
        }else 
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty(){
        if(this.length === 0) return true
        else return false;
    }

}



module.exports = Queue;