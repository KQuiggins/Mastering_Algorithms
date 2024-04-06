const TreeNode = require('./tree-node-class');

const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('D');
const e = new TreeNode('E');
const f = new TreeNode('F');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

console.log(a);
