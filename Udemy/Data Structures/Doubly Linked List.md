# Doubly Linked List

### Objectives

- Construct a Doubly Linked List
- Compare and contrast Doubly Linked List and Singly Linked List
- Implement basic operations on a Doubly Linked List

### We know what lists are... but what is doubly?

**Almost** identical to Singly Linked Lists, except every node has another pointer, to the **previous** node!

### Comparisons with Singly Linked Lists

**More Memory === More Flexibility**

=> It's **almost** always a tradeoff!

### Pushing

Adding a node to the **end** of the Doubly Linked List

### Pushing pseudocode

- Create a new node with the value passed to the function
- If the head property is null, set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length by 1
- Return the Doubly Linked List

### Pushing Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
console.log(newDoubly);
newDoubly.push(4);
console.log(newDoubly);
```

### Popping 

Removing a node from the **end** of the Doubly Linked List

### Popping pseudocode

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous node
- Set the new Tail's next to null
- Decrement the length
- Return the value removed

### Popping Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
newDoubly.push(4);
newDoubly.push(5);
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
```

