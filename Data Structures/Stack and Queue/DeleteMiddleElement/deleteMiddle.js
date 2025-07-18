const stack = require('../Stack-Queue/Stack')

class StackWithDeleteMiddle extends stack {
    constructor(){
        super()
    }

    deleteMiddle(){
        let midElement;
        let tempStack = new stack();
        let currentIndex = 1;
        let stackLength = this.length
        if(this.length===0){
            return "This stack is empty."
        }

        if(this.length===1){
            return `Stack only got one element: (${this.top.data})`
        }

        if(this.length%2 == 0){
            midElement = (this.length/2)-1
        }else {
            midElement = Math.ceil(this.length/2)
        }

        while(currentIndex<=stackLength){
            if(currentIndex < midElement){
                tempStack.Push(this.top.data);
                this.Pop();
            } else if(currentIndex === midElement){
                this.Pop()
            }
            else if (currentIndex > midElement && tempStack.length > 0) {
                this.Push(tempStack.top.data);
                tempStack.Pop()
                
            }
            currentIndex++;
        }

    }
}

module.exports = StackWithDeleteMiddle