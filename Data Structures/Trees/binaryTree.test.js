const BinaryTree = require("./binaryTree");
const TNode = require("./TNode");

let tree;

beforeEach(() => {
  tree = new BinaryTree();
});

// -------------------------------
// Edge Cases
// -------------------------------
test("should initialize with null root", () => {
  expect(tree.root).toBeNull();
});

test("traversals on empty tree should return empty array", () => {
  expect(tree.PreOrder()).toEqual([]);
  expect(tree.InOrder()).toEqual([]);
  expect(tree.PostOrder()).toEqual([]);
});

test("printing empty tree should log 'Tree is empty'", () => {
  console.log = jest.fn();
  tree.print();
  expect(console.log).toHaveBeenCalledWith("Tree is empty");
});

// -------------------------------
// Normal cases
// -------------------------------
test("should add a single node as root", () => {
  tree.add(10);
  expect(tree.root.value).toBe(10);
  expect(tree.root.left).toBeNull();
  expect(tree.root.right).toBeNull();
});

test("should add nodes in level-order", () => {
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(3);
  tree.add(7);

  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(15);
  expect(tree.root.left.left.value).toBe(3);
  expect(tree.root.left.right.value).toBe(7);
});

// -------------------------------
// Traversal tests
// -------------------------------
test("PreOrder traversal should return correct array", () => {
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(3);
  tree.add(7);
  expect(tree.PreOrder()).toEqual([10, 5, 3, 7, 15]);
});

test("InOrder traversal should return correct array", () => {
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(3);
  tree.add(7);
  expect(tree.InOrder()).toEqual([3, 5, 7, 10, 15]);
});

test("PostOrder traversal should return correct array", () => {
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(3);
  tree.add(7);
  expect(tree.PostOrder()).toEqual([3, 7, 5, 15, 10]);
});

// -------------------------------
// Edge cases with missing children
// -------------------------------
test("should handle nodes with only one child", () => {
  tree.add(1);
  tree.add(2);
  tree.add(3);
  tree.add(4); // left child of 2
  // Tree structure:
  //       1
  //     /   \
  //    2     3
  //   /
  //  4
  expect(tree.PreOrder()).toEqual([1, 2, 4, 3]);
  expect(tree.InOrder()).toEqual([4, 2, 1, 3]);
  expect(tree.PostOrder()).toEqual([4, 2, 3, 1]);
});
