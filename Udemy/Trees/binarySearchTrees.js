class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return undefined;
      if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
  find(val) {
    if (!this.root) return false;

    let current = this.root;

    while (true) {
      if (current.val === val) return current;
      else if (current.val < val) {
        if (!current.right) return false;
        current = current.right;
      } else {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFS_PO() {
    let visited = [],
      current = this.root;
    let traverse = node => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
tree.insert(17);
tree.insert(7);
tree.insert(8);

console.log(tree.BFS());
console.log(tree.DFS_PO());
