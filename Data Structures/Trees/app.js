const BT = require('./binaryTree')
const BST = require("./binarySearchTree")

let bt = new BT();

bt.add(10)
bt.add(5)
bt.add(11)
bt.add(4)
bt.add(8)
bt.add(9)
bt.add(3)
bt.print()
console.log("==========")
console.log("Pre-Order:")
console.log(bt.PreOrder())
console.log("==========")
console.log("Post-Order:")
console.log(bt.PostOrder())
console.log("==========")
console.log("in-Order:")
console.log(bt.InOrder())
console.log("-----------------")
console.log("BST section")


let bst = new BST();

bst.add(10)
bst.add(5)
bst.add(11)
bst.add(4)
bst.add(8)
bst.add(9)
bst.add(3)
bst.print()
