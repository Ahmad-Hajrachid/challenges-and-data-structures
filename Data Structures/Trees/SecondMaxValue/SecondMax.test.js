const BinaryTree = require('../binaryTree');
const Node = require('../TNode');

describe('FindSecondMax', () => {
    let BT;

    beforeEach(() => {
        BT = new BinaryTree();
    });

    test('should find second max in a complex tree', () => {
        BT.root = new Node(10);
        BT.root.left = new Node(5);
        BT.root.right = new Node(20);
        BT.root.left.left = new Node(3);
        BT.root.left.right = new Node(7);
        BT.root.right.left = new Node(15);
        BT.root.right.right = new Node(25);
        
        expect(BT.FindSecondMax()).toBe(20);
    });

    test('should return duplicate value when all values are the same', () => {
        BT.root = new Node(7);
        BT.root.left = new Node(7);
        BT.root.right = new Node(7);
        BT.root.left.left = new Node(7);
        
        expect(BT.FindSecondMax()).toBe(7);
    });

    test('should find second max with mixed duplicates', () => {
        BT.root = new Node(10);
        BT.root.left = new Node(10);
        BT.root.right = new Node(20);
        BT.root.right.left = new Node(15);
        BT.root.right.right = new Node(20);
        
        expect(BT.FindSecondMax()).toBe(15);
    });

    test('should work with two nodes', () => {
        BT.root = new Node(8);
        BT.root.left = new Node(12);
        
        expect(BT.FindSecondMax()).toBe(8);
    });

    test('should work with negative numbers', () => {
        BT.root = new Node(-5);
        BT.root.left = new Node(-10);
        BT.root.right = new Node(-1);
        
        expect(BT.FindSecondMax()).toBe(-5);
    });

    test('should return null for single node tree', () => {
        BT.root = new Node(42);
        
        expect(BT.FindSecondMax()).toBe(null);
    });

    test('should find second max in large tree with duplicates', () => {
        BT.root = new Node(50);
        BT.root.left = new Node(30);
        BT.root.right = new Node(70);
        BT.root.left.left = new Node(20);
        BT.root.left.right = new Node(40);
        BT.root.right.left = new Node(60);
        BT.root.right.right = new Node(70);
        BT.root.left.left.left = new Node(70);
        
        expect(BT.FindSecondMax()).toBe(60);
    });

    test('should return null for empty tree', () => {
        expect(BT.FindSecondMax()).toBe(null);
    });

    test('should work with left-heavy tree', () => {
        BT.root = new Node(10);
        BT.root.left = new Node(15);
        BT.root.left.left = new Node(20);
        BT.root.left.left.left = new Node(25);
        
        expect(BT.FindSecondMax()).toBe(20);
    });

    test('should work with right-heavy tree', () => {
        BT.root = new Node(25);
        BT.root.right = new Node(20);
        BT.root.right.right = new Node(15);
        BT.root.right.right.right = new Node(10);
        
        expect(BT.FindSecondMax()).toBe(20);
    });
});