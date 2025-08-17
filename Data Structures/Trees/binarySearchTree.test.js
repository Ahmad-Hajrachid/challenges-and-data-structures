const BinarySearchTree = require("./binarySearchTree");
const TNode = require("./TNode");

// Edge cases: empty tree
test("should initialize with null root", () => {
  const bst = new BinarySearchTree();
  expect(bst.root).toBeNull();
});

test("Contains on empty tree should return false", () => {
  const bst = new BinarySearchTree();
  expect(bst.Contains(10)).toBe(false);
});

test("Remove on empty tree should not fail", () => {
  const bst = new BinarySearchTree();
  expect(() => bst.Remove(10)).not.toThrow();
  expect(bst.root).toBeNull();
});

// Add and Contains tests
test("should add a root node", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  expect(bst.root.value).toBe(10);
  expect(bst.root.left).toBeNull();
  expect(bst.root.right).toBeNull();
});

test("should add multiple nodes correctly", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(3);
  bst.add(7);

  expect(bst.root.value).toBe(10);
  expect(bst.root.left.value).toBe(5);
  expect(bst.root.right.value).toBe(15);
  expect(bst.root.left.left.value).toBe(3);
  expect(bst.root.left.right.value).toBe(7);
});

test("Contains should correctly identify values", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);

  expect(bst.Contains(10)).toBe(true);
  expect(bst.Contains(5)).toBe(true);
  expect(bst.Contains(15)).toBe(true);
  expect(bst.Contains(100)).toBe(false);
});

test("should ignore duplicate values", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(10); // duplicate
  expect(bst.root.value).toBe(10);
  expect(bst.root.left).toBeNull();
  expect(bst.root.right).toBeNull();
});

// Remove tests
test("should remove leaf node", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.Remove(5);

  expect(bst.Contains(5)).toBe(false);
  expect(bst.root.left).toBeNull();
});

test("should remove node with one child", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(3);
  bst.Remove(5);

  expect(bst.Contains(5)).toBe(false);
  expect(bst.root.left.value).toBe(3);
});

test("should remove node with two children", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(12);
  bst.add(18);

  bst.Remove(15);
  expect(bst.Contains(15)).toBe(false);
  expect(bst.root.right.value).toBe(18);
});

test("should remove root node correctly", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);

  bst.Remove(10);

  expect(bst.Contains(10)).toBe(false);
  expect(bst.root.value).not.toBe(10); // root value should be replaced
  expect(bst.root.left.value).toBe(5);
  // Only check right if it exists
  if (bst.root.right) {
    expect(bst.root.right.value).toBe(15);
  }
});


test("should maintain BST properties after multiple operations", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(12);
  bst.add(18);
  bst.add(3);
  bst.add(7);

  bst.Remove(5);
  bst.Remove(15);

  const values = [];
  const inOrderTraversal = (node) => {
    if (!node) return;
    inOrderTraversal(node.left);
    values.push(node.value);
    inOrderTraversal(node.right);
  };

  inOrderTraversal(bst.root);

  expect(values).toEqual([3, 7, 10, 12, 18]);
});
