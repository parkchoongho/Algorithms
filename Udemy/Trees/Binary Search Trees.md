# Binary Search Trees

### Objectives

- Define what a tree is
- Compare and contrast trees and lists
- Explain the differences between trees, binary trees, and binary search trees
- Implement operations on binary search trees

### What is a Tree?

A data structure that consists of nodes in a **parent/child** relationship

#### Lists - linear

#### Trees - nonlinear

A **Singly Linked List** can be a sort of a **special case of a tree**

### Not a Tree

If any nodes are **referencing other nodes that are not below them**, that's not a tree.

And a **Tree** should has **one root!!**

### Tree Terminology

- **Root** - The top node in a tree
- **Child** - A node directly connected to another node when moving away from the Root
- **Parent** - The converse notion of a child
- **Siblings** - A group of nodes with the same parent
- **Leaf** - A node with no children
- **Edge** - The connection between one node and another

### Real Uses for Trees

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

### Kinds of Trees

- Trees
- Binary Trees
- Binary Search Trees

### How Binary Search Trees  Work

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than parent
- Every node to the right of a parent node is **always greater** than the parent

### Inserting a node

**Steps - Iteratively or Recursively**

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

### Inserting Code

```javascript
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
// tree.insert(11);
// tree.insert(11);

console.dir(tree);
```

