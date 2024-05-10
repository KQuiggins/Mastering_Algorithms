class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  const result = [];

  function traverseNode(node) {
    if (node !== null) {
      result.push(node.data);
      traverseNode(node.left);
      traverseNode(node.right);
    }
  }

  traverseNode(root);
  return result;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
