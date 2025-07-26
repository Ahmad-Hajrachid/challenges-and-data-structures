const node = require('../Stack-Queue/node');
const stack = require('../Stack-Queue/Stack')
class MinStack{
    constructor(){
        this.length=0;
        this.bottom;
        this.top=null;
        this.tempStack = new stack()
        this.min;
    }

    Push(data){
        if(data===null || data === undefined){
            return "Cant push null or undefined"
        }
        let newNode = new node(data)
        if(!this.top){
            this.tempStack.Push(newNode.data)
            this.top= newNode;
            this.bottom = this.top;
            this.min = this.tempStack.top.data;
            this.length++
        } else {
            if(this.min>= newNode.data){
                this.tempStack.Push(newNode.data)
                this.min = this.tempStack.top.data;
            }
            newNode.next = this.top
            this.top = newNode;
            this.length++;
        }
    }

    Pop(){
        let removedNode = this.top;
        if(this.length===0){
            return "Can't pop elements from an empty stack";
        } else {
            if(this.top.data===this.min){
                this.tempStack.Pop();
                this.min = this.tempStack.top.data;
            }
            this.top = this.top.next;
            this.length--;
            return removedNode.data;
        }
    }

    Top(){
        if(this.length===0){
            return "Stack is empty."
        } else {
            return this.top.data;
        }
    }

    isEmpty(){
        if(this.length===0){
            return true
        } else {
            return false
        }
    }

    getMin(){
        if(this.length===0){
            return "Stack is empty."
        }
        
        return this.min;
    }

    printStack(){
        let printedStack = `Top`;
        let currentNode = this.top;
        if(this.length===0){
            return "Stack is empty";
        }

        while(currentNode !==null){
            printedStack += ` -> ${currentNode.data}`;
            currentNode = currentNode.next;
        }
        
         console.log(printedStack);
    }
}

module.exports = MinStack;