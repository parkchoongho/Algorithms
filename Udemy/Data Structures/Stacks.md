# Stacks

### Objectives

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure

### What is a Stack?

A **LIFO**(**Last In First Out**) data structure! The last element added to the stack will be the first element removed from the stack

### How is it used?

Think about a stack of **plates**, or a stack of **markers**, or a stack of ...**anything**.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

We've seen this before **The Call Stack**!

### Where Stacks are used

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

**There is more than one way of implementing a stack**

### Array Implementation

Using Array with **push** and **pop** method or **unshift** and **shift** method, we can handle array like stack.

In general if you are going to use an array, **push** and **pop** are the better options. Because it doesn't require reindexing the entire array every time you add or remove, something you just have to create some a new index at the end or remove that index.

### Linked List Implementation

In before when we learn the linked list, the push and pop are **O(N)**. But in stack, push and pop should be **O(1)** (Constant Time!). So **shift** and **unshift** will be **pop** and **push**.

#### Pushing 

**Add** a value to the **top** of the stack!

#### Pushing pseudocode

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

#### Pushing Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
}

let linkedStack = new Stack();

console.log(linkedStack.push(1));
console.log(linkedStack.push(2));
console.log(linkedStack.push(3));
```

#### Pop pseudocode

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

#### Pop Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = poppedNode.next;
    }

    poppedNode.next = null;
    this.size--;
    return poppedNode;
  }
}

let linkedStack = new Stack();

console.log(linkedStack.push(1));
console.log(linkedStack.push(2));
console.log(linkedStack.push(3));

console.log(linkedStack.pop());
console.log(linkedStack);
console.log(linkedStack.pop());
console.log(linkedStack);
console.log(linkedStack.pop());
console.log(linkedStack);
```

#### Big O of Stacks

- Insertion - **O(1)**
- Removal - **O(1)**
- Searching - **O(N)**
- Access - **O(N)**

#### Recap

- Stacks are a **LIFO** data structure where the last value in is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing(remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JavaScript, but are relatively simple to implement