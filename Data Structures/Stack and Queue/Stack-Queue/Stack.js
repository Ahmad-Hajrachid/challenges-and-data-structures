const { setServers } = require('dns');
const node = require('./node')

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
        this.bottom;
    }

    Push(data){
        if(data ===null || data === undefined){
            return "Can't push null or undefined"
        }
        let newNode = new node(data);

        if(this.top === null){
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++
        }
        
    }
        // Remove and return the top node of the stack
        Pop(){
            let removedNode = this.top;
            if(this.length===0){
                return "This stack is empty."
            }
            this.top = this.top.next;
            this.length--;
            return removedNode.data
            }

        // Return te top node from the stack without removing it.
        Peek(){
            if(this.length===0){
                return "Stack is empty"
            }
            return this.top.data;
        }

        // Check if the stack is empty.
        isEmpty(){
            if(this.length=== 0){
                return true;
            } else {
                return false;
            }
        }
}

module.exports = Stack;