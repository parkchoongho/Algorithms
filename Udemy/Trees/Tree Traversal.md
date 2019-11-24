# Tree Traversal

### Traversing a Tree

**Two ways**

- Breadth-First Search
- Depth-First Search

### Breadth-First Search(BFS)

We're going to prioritize visiting all nodes on the same level before we move down or up(vertical)

So, breadth first search just means we want to visit every node on the same level before we look at the children.

**Steps - Iteratively**

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in  the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

### BFS Code

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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
tree.insert(17);
tree.insert(7);
tree.insert(8);

console.log(tree.BFS());
```

### DFS(Depth-First Search) - PreOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function withe the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

### DFS - PreOrder Code

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
```

### DFS - PostOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function withe the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values

### DFS - PostOrder Code

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
  DFSPreOrder() {
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
  DFSPostOrder() {
    let visited = [],
      current = this.root;
    let traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
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
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
```

### DFS - InOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function withe the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

### DFS - InOrder Code

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
  DFSPreOrder() {
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
  DFSPostOrder() {
    let visited = [],
      current = this.root;
    let traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(current);
    return visited;
  }
  DFSInOrder() {
    let visited = [],
      current = this.root;
    let traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);
tree.insert(8);

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
```

