const TNode = require('./TNode.js')

class BinaryTree {

    constructor(){
        this.root = null;
    }
    add(value){
        const newNode = new TNode(value);
        
        if(this.root ===null){
            this.root = newNode;
            return this;
        }

        const queue = [this.root];//queue is needed for level order traversal

        while(queue.length >0){
            const currentNode = queue.shift()

            if(currentNode.left ===null){
                currentNode.left = newNode;
                return this;
            }

            if(currentNode.right ===null){
                currentNode.right = newNode;
                return this;
            }

            queue.push(currentNode.left);
            queue.push(currentNode.right)
        }
        return this;
    }
    
    PreOrder() { // root-> left -> right
    const result = [];
    
    function preOrderHelper(currentNode) {
        if (currentNode !== null) {
            result.push(currentNode.value);
            preOrderHelper(currentNode.left);
            preOrderHelper(currentNode.right);
        }
    }
    
    preOrderHelper(this.root);
    return result;
}

    InOrder() {
    const result = [];
    
    function inOrderHelper(currentNode) {
        if (currentNode !== null) {
            inOrderHelper(currentNode.left);
            result.push(currentNode.value);
            inOrderHelper(currentNode.right);
        }
    }
    
    inOrderHelper(this.root);
    return result;
}

    PostOrder() {
    const result = [];
    
    function postOrderHelper(currentNode) {
        if (currentNode !== null) {
            postOrderHelper(currentNode.left);
            postOrderHelper(currentNode.right);
            result.push(currentNode.value);
        }
    }
    
    postOrderHelper(this.root);
    return result;
}
    FindSecondMax(){
        if(!this.root)return null
        if(!this.root.left && !this.root.right) return null;
        
        let currentMax = this.root.value;
        let secondMax = null;


        function FindSecondMaxHelper(Node){
            
            if(Node){
                
                if (currentMax < Node.value) {
                    secondMax = currentMax;
                    currentMax = Node.value;
                    
                }
                if(currentMax > Node.value) {
                    if(secondMax < Node.value){
                        secondMax = Node.value;
                    }
                               
                }
                FindSecondMaxHelper(Node.right)
                FindSecondMaxHelper(Node.left)   
            }
        }
        FindSecondMaxHelper(this.root);
        return secondMax === null ? this.root.value : secondMax;
    }

    leafSum(){

        if(!this.root)return null
        if(!this.root.left && !this.root.right) return this.root.value;

        let leafsSum = 0;

        function leafSumHelper(node){
            if(node){
                if (!node.left && !node.right) {
                    leafsSum +=node.value
                } else {
                    leafSumHelper(node.left)
                    leafSumHelper(node.right)
                }
            }
        }
        leafSumHelper(this.root);
        return leafsSum;
    }

    print() {
    if (!this.root) {
        console.log("Tree is empty");
        return;
    }
    
    function printHelper(node, prefix, isLast) {
        if (node !== null) {
            console.log(prefix + (isLast ? "└── " : "├── ") + node.value);
            
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            
            if (node.left && node.right) {
                printHelper(node.left, newPrefix, false);
                printHelper(node.right, newPrefix, true);
            } else if (node.left) {
                printHelper(node.left, newPrefix, true);
            } else if (node.right) {
                printHelper(node.right, newPrefix, true);
            }
        }
    }
    
    printHelper(this.root, "", true);
}
}

module.exports =BinaryTree;