const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const root = new Node(3);
const Node9 = new Node(9);
const Node20 = new Node(20);
const Node15 = new Node(15);
const Node7 = new Node(7);

root.left = Node9;
root.right = Node20;
Node20.left = Node15;
Node20.right = Node7;

const result = maxDepth(root);

console.log(result); // 3
