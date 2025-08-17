const TNode = require('./TNode')
const BinaryTree = require('./binaryTree')
class BinarySearchTree extends BinaryTree{
    constructor(){
        super()
    }

    add(value) {
        
        if(this.root === null){
            this.root = new TNode(value);
            return;
        } else {
            let currentNode = this.root;
        
            const searchTree = function(currentNode){
                if(value < currentNode.value){
                    if(currentNode.left ===null){
                        currentNode.left = new TNode(value);
                        return;
                    } else return searchTree(currentNode.left)

                } else if(value > currentNode.value){
                    if(currentNode.right ===null){
                        currentNode.right = new TNode(value);
                        return;
                    }else return searchTree(currentNode.right)

                } else {
                    return null; //this is for the duplicated values.
                }
            }
            return (searchTree(currentNode))
        }

    }

    Contains(value){
        let currentNode = this.root;

        while(currentNode){
            if(value === currentNode.value){
                return true;
            }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    Remove(value){

        const RemoveNode =function(currentNode,value){
            if(currentNode ===null){
                return null;
            }
            
            if(value === currentNode.value){
                if(currentNode.left ===null && currentNode.right === null){
                    return null;
                }
                
                if(currentNode.left ===null){
                    return currentNode.right;
                }

                if(currentNode.right ===null){
                    return currentNode.left;
                }

                let tempNode = currentNode.right;

                while(tempNode.left !==null){
                    tempNode = tempNode.left;
                }
                currentNode.value = tempNode.value;
                currentNode.right = RemoveNode(currentNode.right,tempNode.value)
                return currentNode;
            } else if(value < currentNode.value){
                currentNode.left = RemoveNode(currentNode.left,value);
                return currentNode;
            } else {
                currentNode.right = RemoveNode(currentNode.right, value);
                return currentNode;
            }
        }
        this.root = RemoveNode(this.root,value);
    }
}

module.exports = BinarySearchTree;
