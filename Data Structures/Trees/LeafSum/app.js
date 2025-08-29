const BT = require('../binaryTree')
const Node = require('../TNode')
const bt = new BT();

bt.root = new Node(9);
bt.root.left = new Node(8);
bt.root.right = new Node(12);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(7);
bt.root.right.left = new Node(17);
bt.root.right.right = new Node(23);
bt.root.left.left.right = new Node(4);

let leafSum= bt.leafSum();
console.log(leafSum)