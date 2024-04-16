const { Node, depthFirstTraversal } = require('./depth-first-traversal');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f
const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

// Run depth-first traversal
const result = depthFirstTraversal(root);

console.log(result); // ['a', 'b', 'd', 'e', 'c', 'f']
