const BinaryTree = require('../binaryTree')
const Node = require('../TNode')
const BT = new BinaryTree()

BT.root = new Node(10)
BT.root.left = new Node(5)
BT.root.right = new Node(20)
BT.root.left.left = new Node(3)
BT.root.left.right = new Node(7)
BT.root.right.left = new Node(15)
BT.root.right.right = new Node(25)

let secondMax = BT.FindSecondMax()
console.log(secondMax)
