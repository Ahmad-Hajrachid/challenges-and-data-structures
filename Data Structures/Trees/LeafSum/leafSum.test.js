const BT = require('../binaryTree')
const Node = require('../TNode')

describe('leafSum',()=>{
    let bt;

    beforeEach(()=>{
        bt = new BT();
    });

    test("should return the sum of the leaf nodes values",()=>{
        bt.root = new Node(9);
        bt.root.left = new Node(8);
        bt.root.right = new Node(12);
        bt.root.left.left = new Node(3);
        bt.root.left.right = new Node(7);
        bt.root.right.left = new Node(17);
        bt.root.right.right = new Node(23);
        bt.root.left.left.right = new Node(4);

        expect(bt.leafSum()).toBe(51)
    })

    test("should return the sum of the leaf nodes values even if there are negative values",()=>{
        bt.root = new Node(9);
        bt.root.left = new Node(-8);
        bt.root.right = new Node(-12);
        bt.root.left.left = new Node(3);
        bt.root.left.right = new Node(-7);
        bt.root.right.left = new Node(17);
        bt.root.right.right = new Node(23);
        bt.root.left.left.right = new Node(-4);

        expect(bt.leafSum()).toBe(29)
    })

    test("When the tree only got one node, it should return it's value",()=>{
        bt.root = new Node(9);

        expect(bt.leafSum()).toBe(9)
    })

    test("When the tree is empty, it should return null",()=>{

        expect(bt.leafSum()).toBe(null)

    })
})